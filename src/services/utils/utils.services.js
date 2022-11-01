import { avatarColors } from '@services/utils/static.data'
import { floor, random } from 'lodash'

export class UtilsServices {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)]
  }

  static generateAvatarImage(text, backgroundColor, foregroundColor = 'white') {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.height = 200
    canvas.width = 200

    /* Background color */
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    /* Foreground text */
    ctx.font = 'normal 80px sans-serif'
    ctx.fillStyle = foregroundColor
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(
      text
        .trim()
        .split(' ')
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join(' '),
      canvas.width / 2,
      canvas.height / 2
    )

    return canvas.toDataURL('image/png')
  }
}
