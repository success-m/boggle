class LettersController < ApplicationController
	def index
		headers['Access-Control-Allow-Origin'] = '*'
		
		render json: [
			[   
				(97 + rand(26)).chr,(97 + rand(26)).chr,
				(97 + rand(26)).chr,(97 + rand(26)).chr
			],[   
				(97 + rand(26)).chr,(97 + rand(26)).chr,
				(97 + rand(26)).chr,(97 + rand(26)).chr
			],[   
				(97 + rand(26)).chr,(97 + rand(26)).chr,
				(97 + rand(26)).chr,(97 + rand(26)).chr
			],[   
				(97 + rand(26)).chr,(97 + rand(26)).chr,
				(97 + rand(26)).chr,(97 + rand(26)).chr
			],
		]
	end
end
