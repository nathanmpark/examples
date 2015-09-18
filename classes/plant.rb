class Plant
  @@tallest = nil

  def initialize(name,height)
    @name = name
    @height = height
    check_for_tallest
  end

  attr_reader :height

  def inspect
    "#{@height}-inch-tall #{@name}"
  end

  def grow(inches)
    @height += inches
    check_for_tallest
  end

  def self.tallest
    @@tallest
  end

  private

  def check_for_tallest
    if @@tallest.nil? || @height >@@tallest.height
      @@tallest = self
    end
  end
end