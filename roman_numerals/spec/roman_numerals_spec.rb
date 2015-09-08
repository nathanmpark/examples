require_relative "../roman_numerals"

describe RomanNumeralConverter do

  let(:converter) {RomanNumeralConverter.new}

  describe "#convert arabic to roman" do
    it "converts 1" do
      arabic_number = 1
      expect(converter.convert_arabic_to_roman(1)).to eq "I"
    end

    it "converts 3" do
      arabic_number = 3
      expect(converter.convert_arabic_to_roman(3)).to eq "III"
    end

    it "converts 4" do
      arabic_number = 4
      expect(converter.convert_arabic_to_roman(4)).to eq "IV"
    end

  end
end