import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const pdfPath = path.join(
      process.cwd(),
      "public",
      "downloads",
      "feelings-friendships-journal.pdf"
    );

    if (!fs.existsSync(pdfPath)) {
      return new NextResponse("PDF not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(pdfPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Feelings-and-Friendships-Social-Emotional-Journal.pdf"',
        "Content-Length": String(fileBuffer.length),
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (error) {
    console.error("Error serving feelings journal PDF:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
