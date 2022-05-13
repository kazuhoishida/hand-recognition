import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils"
import { HAND_CONNECTIONS, NormalizedLandmarkListList, Results } from "@mediapipe/hands"

/**
 * cnavasに描画する
 * @param ctx canvas context
 * @param results 手の検出結果
 */
export default function drawCanvas(ctx, results) {
  const width = ctx.canvas.width
  const height = ctx.canvas.height

  ctx.save()
  ctx.clearRect(0, 0, width, height)
  // flip canvas horizontally
  ctx.scale(-1, 1)
  ctx.translate(-width, 0)
  ctx.drawImage(results.image, 0, 0, width, height)

  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: "#FFFFFF2C", lineWidth: 1 })
      drawLandmarks(ctx, landmarks, { color: "#FFFFFF2C", lineWidth: 1, radius: 0.5 })
    }
  }
  ctx.restore()
}
