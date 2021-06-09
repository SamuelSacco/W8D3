def test
    arr = Array.new(8) {Array.new(8, "_")}
    arr.each do |row|
        puts row.join(" ")
    end
end
test