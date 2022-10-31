import { avatarColors } from '@services/utils/static.data'
import { floor, random } from 'lodash'

export class UtilsServices {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)]
  }
}
