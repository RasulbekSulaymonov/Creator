import { cards, cardType } from "../../../../constants";
import Amount from "../../../Amount";
import ComboBox from "../../../ComboBox";
import CryptoField from "../../../CryptoField";
import Title from "../../../Title";

const TopUpDetails = () => {
  return (
    <div className="flex flex-1 w-full h-[100%]">
      <div className="h-[100%] w-[50%]  pt-8 pb-16 pr-8 flex flex-col gap-[30px] border-r-2">
        <Title
          number="1"
          text="Please select the card type and card number for top up"
        />
        <div className="flex justify-between">
          <ComboBox obj={cardType} label="Card Type" id="1" />
          <ComboBox obj={cards} label="Deposit to Card" id="2" />
        </div>
        <Title number="2" text="Enter the top-up amount" />
        <Amount />
      </div>
      <div className="h-[100%] w-[50%] py-8 pl-8 flex flex-col gap-[30px]">
        <Title
          number="3"
          text="Select the cryptocurrency you will use to top up card"
        />
        <CryptoField />
      </div>
    </div>
  );
};

// bg-green-200

export default TopUpDetails;
