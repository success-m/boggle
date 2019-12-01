class WordsController < ApplicationController
	def index
		headers['Access-Control-Allow-Origin'] = '*'

		w = Word.find_by(word: params[:word])
		point = 0
		result = {"result": "no data found", "point": point}
		if w != nil
			
			if w.word.length <= 4
				point = 1
			elsif w.word.length == 5
				point = 2
			elsif w.word.length == 6
				point = 3
			elsif w.word.length == 7
				point = 4
			elsif w.word.length >= 8
				point = 11
			end

			result = {"result": "success", "point": point}
		end


		render json: result
	end
end
