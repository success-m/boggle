class LettersController < ApplicationController
	def index
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
