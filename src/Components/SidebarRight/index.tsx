import SettingsButton from "./SettingsButton";
import SettingTitle from "./SettingsTitle";
import Rounded from "../SVG/Rounded";
import Corner from "../SVG/Corner";
import Sun from "../SVG/Sun";
import Moon from "../SVG/Moon";
import FontFamely from "../SVG/FontFamely";
import PresentButton from "./PresentButton";
import { setPropertyFunction } from "../../utils";
import { fonts, presets } from "../../constants";
import "../../App.css";

const SidebatRight = () => {
  return (
    <div className={`w-[290px] h-[100vh] bgcolor`}>
      <div className="h-28 p-5 pt-[50px] border-b-2 box-border font-black text-xl">
        <p>Settings</p>
      </div>
      <div className="flex flex-col h-[85%] p-[30px] gap-10 overflow-auto scroll">
        <div className="flex flex-col gap-[20px]">
          <SettingTitle text="Templates" />
          <div className="flex flex-wrap gap-[10px]">
            <SettingsButton
              text="Rounded Corners Form"
              icon={<Rounded />}
              onClick={() => {
                setPropertyFunction({
                  "--lg-rounded": "12px",
                  "--md-rounded": "6px",
                  "--full-corner": "9999px",
                });
              }}
            />
            <SettingsButton
              text="Sharp Corners Form"
              icon={<Corner />}
              onClick={() => {
                setPropertyFunction({
                  "--lg-rounded": "0px",
                  "--md-rounded": "0px",
                  "--full-corner": "0px",
                });
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <SettingTitle text="Color scheme" />
          <div className="flex flex-wrap gap-[10px]">
            <SettingsButton
              text="Light"
              icon={<Sun />}
              onClick={() => {
                setPropertyFunction({
                  "--main-bgcolor": "#f0f3f8",
                  "--main-textcolor": "black",
                  "--bgcolor": "#ffffff",
                  "--body-color": "#ebebeb",
                });
              }}
            />
            <SettingsButton
              text="Dark Blue"
              icon={<Moon />}
              onClick={() => {
                setPropertyFunction({
                  "--main-bgcolor": "#193752",
                  "--main-textcolor": "white",
                  "--bgcolor": "#122332",
                  "--body-color": "#193045",
                });
              }}
            />
            <SettingsButton
              text="Dark Black"
              icon={<Moon />}
              onClick={() =>
                setPropertyFunction({
                  "--main-bgcolor": "#2e3d4b",
                  "--main-textcolor": "white",
                  "--bgcolor": "#222222",
                  "--body-color": "#444444",
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <SettingTitle text="Presets" />
          <div className="flex flex-wrap gap-[10px]">
            {presets.map((item) => (
              <PresentButton
                key={item.color}
                color={item.color}
                onClick={() => {
                  setPropertyFunction({
                    "--main-color": item.color,
                  });
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <SettingTitle text="Fonts" />
          <div className="flex flex-wrap gap-[10px]">
            {fonts.map((item) => (
              <SettingsButton
                key={item.font}
                text={item.font}
                icon={<FontFamely />}
                onClick={() =>
                  setPropertyFunction({ "--main-font": item.font })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebatRight;
