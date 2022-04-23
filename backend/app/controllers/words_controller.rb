class WordsController < ApplicationController
  def index
    render json: [
        'smart',
        'power',
        'apple',
        'black',
        'money',
        'adieu',
        'first',
    ]
  end
end
