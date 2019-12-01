# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

result = []
f = File.open(Rails.root.join('public', 'words.txt')).read
f.each_line {|line| result << line.encode.gsub!(/[^a-zA-Z]/, '') }
	
sql = "insert into word_temps(word, created_at, updated_at) values "	
insert = []

result.each do |w|
	if w.length >=3
		begin
			# ..................................................
			# 
			# slow execution hence moved towards bulk load logic
			# ..................................................
			# 
			# Word.create(word: w.downcase)
			insert << "(\"" + w.downcase + "\", now(), now())"
		rescue
			print(w.downcase + " already exists\n")
		end
	end
end


sql = sql + insert.join(",")
ActiveRecord::Base.connection.execute("truncate word_temps")

ActiveRecord::Base.connection.execute("truncate words")

ActiveRecord::Base.connection.execute(sql)

ActiveRecord::Base.connection.execute("
	insert into words(word, created_at, updated_at)
	select distinct word, now(), now() from word_temps
	")