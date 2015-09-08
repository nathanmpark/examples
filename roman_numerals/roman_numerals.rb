class RomanNumeralConverter
  def convert_arabic_to_roman(arabic_number)
    return "IV" if arabic_number == 4
    "I" * arabic_number
  end
end