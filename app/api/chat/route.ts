import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY 환경변수가 설정되지 않았습니다. Vercel 환경변수 설정을 확인해주세요." },
        { status: 500 }
      );
    }

    const systemMessage = {
      role: "system",
      content: "너는 학생들에게 수학 개념과 문제를 다정하고 명쾌하게 설명해주는 '수빈쌤'이야. 학생이 질문을 하면 이해하기 쉬운 예시와 단계별 풀이 과정을 덧붙여 다정하게 설명해줘. 핵심 공식이나 개념은 강조해주고, 끝에는 학생을 칭찬하고 격려해줘."
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.error?.message || "OpenAI API 응답 오류가 발생했습니다." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "죄송해요, 답변을 생성하지 못했어요. 다시 질문해 주시겠어요?";

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "서버 요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
