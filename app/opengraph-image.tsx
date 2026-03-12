import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dazzcode | SaaS Development Agency";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const syneSemiBold = await fetch(
        new URL("https://fonts.gstatic.com/s/syne/v22/8vIL7w4Y_wq7lTC1Twwu7kM.woff", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: "#08090c",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: '"Syne"',
                    padding: "40px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 80,
                        fontWeight: 700,
                        letterSpacing: "-2px",
                        marginBottom: "40px",
                    }}
                >
                    DAZZ<span style={{ color: "#00e5ff" }}>CODE</span>
                </div>
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: 600,
                        color: "#94a3b8",
                        textAlign: "center",
                        maxWidth: "900px",
                    }}
                >
                    Ship Your SaaS Without the Technical Headache.
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Syne",
                    data: syneSemiBold,
                    style: "normal",
                    weight: 600,
                },
            ],
        }
    );
}
