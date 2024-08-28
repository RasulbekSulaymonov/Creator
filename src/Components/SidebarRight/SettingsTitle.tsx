interface Props {
  text: string;
}

const SettingTitle = ({ text }: Props) => {
  return (
    <div className={`p-2 bg-black text-white w-fit text-xs fullCorner`}>
      <p>{text}</p>
    </div>
  );
};

export default SettingTitle;
