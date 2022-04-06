require 'rest-client'
require 'JSON'

class GetWords
  attr_reader :path

  def initialize(path: )
    @path = path
  end

  def get_words
    words = []

    (1..3).each do |page|
      headers = {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': 'd89433e3f2msh347b2e82883b86fp1ac943jsnb3b4c9dc6c55',
        params: {
          letterPattern: '^[a-zA-Z]+$',
          letters: '5',
          limit: '100',
          page: page.to_s,
        }
      }
      response = RestClient.get('https://wordsapiv1.p.rapidapi.com/words/', headers)
      body = JSON.parse(response.body)
      words += body['results']['data']
    end

    words
  end

  def write_to_file(data)
    File.open(path, mode: 'a+') do |f|
      data.each { |d| f.puts(d) }
    end
  end
end
