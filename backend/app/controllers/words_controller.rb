class WordsController < ApplicationController
  def index
    render json: Dictionary.all.map(:word)
  end
end
