class WordsController < ApplicationController
	def index
		headers['Access-Control-Allow-Origin'] = '*'

		w = Word.find_by(word: params[:word])

		result = {"result": "no data found"}
		if w != nil
			result = {"result": "success"}
		end


		render json: result
	end
end
