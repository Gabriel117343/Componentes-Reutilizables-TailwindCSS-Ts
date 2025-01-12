import { BtnBlueMonochrome, BtnBlueOutline, BtnBlueShadow } from './ui/buttons/BtnBlue'
import { BtnCyanMonochrome, BtnCyanShadow } from './ui/buttons/BtnCyan'
import { DarkOutline } from './ui/buttons/BtnDark'
import { BtnGrayOutline } from './ui/buttons/BtnGray'
import { BtnGreenMonochrome, BtnGreenOutline, BtnGreenShadow } from './ui/buttons/BtnGreen'
import { BtnLimeMonochrome, BtnLimeShadow } from './ui/buttons/BtnLime'
import { BtnRedMonochrome, BtnRedOutline, BtnRedShadow } from './ui/buttons/BtnRed'
import { BtnRegister3D } from './ui/buttons/BtnRegister3D'
import { ButtonPrint, ButtonRefresh } from './ui/buttons/BtnSpecialAction'
import { BtnTealMonochrome, BtnTealShadow } from './ui/buttons/BtnTeal'
import { YellowOutline } from './ui/buttons/BtnYellow'

export const PreviewButtons = () => {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <span>BtnBlueMonochrome</span>
        <BtnBlueMonochrome>Blue Monochrome</BtnBlueMonochrome>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnBlueOutline</span>
        <BtnBlueOutline>Blue Outline</BtnBlueOutline>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnBlueShadow</span>
        <BtnBlueShadow>Blue Shadow</BtnBlueShadow>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnCyanMonochrome</span>
        <BtnCyanMonochrome>Cyan Monochrome</BtnCyanMonochrome>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnCyanShadow</span>
        <BtnCyanShadow>Cyan Shadow</BtnCyanShadow>
      </div>
      <div className="flex flex-col items-center">
        <span>DarkOutline</span>
        <DarkOutline>Dark Outline</DarkOutline>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnGrayOutline</span>
        <BtnGrayOutline>Gray Outline</BtnGrayOutline>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnGreenMonochrome</span>
        <BtnGreenMonochrome>Green Monochrome</BtnGreenMonochrome>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnGreenOutline</span>
        <BtnGreenOutline>Green Outline</BtnGreenOutline>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnGreenShadow</span>
        <BtnGreenShadow>Green Shadow</BtnGreenShadow>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnLimeMonochrome</span>
        <BtnLimeMonochrome>Lime Monochrome</BtnLimeMonochrome>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnLimeShadow</span>
        <BtnLimeShadow>Lime Shadow</BtnLimeShadow>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnRedMonochrome</span>
        <BtnRedMonochrome>Red Monochrome</BtnRedMonochrome>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnRedOutline</span>
        <BtnRedOutline>Red Outline</BtnRedOutline>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnRedShadow</span>
        <BtnRedShadow>Red Shadow</BtnRedShadow>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnRegister3D</span>
        <BtnRegister3D>Register 3D</BtnRegister3D>
      </div>
      <div className="flex flex-col items-center">
        <span>ButtonPrint</span>
        <ButtonPrint>Print</ButtonPrint>
      </div>
      <div className="flex flex-col items-center">
        <span>ButtonRefresh</span>
        <ButtonRefresh>Refresh</ButtonRefresh>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnTealMonochrome</span>
        <BtnTealMonochrome>Teal Monochrome</BtnTealMonochrome>
      </div>
      <div className="flex flex-col items-center">
        <span>BtnTealShadow</span>
        <BtnTealShadow>Teal Shadow</BtnTealShadow>
      </div>
      <div className="flex flex-col items-center">
        <span>YellowOutline</span>
        <YellowOutline>Yellow Outline</YellowOutline>
      </div>
    </div>
  )
}