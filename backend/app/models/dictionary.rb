# frozen_string_literal: true
class Dictionary
  include Mongoid::Document
  field :word, type: String

  validates_uniqueness_of :word
  index({ word: 1 }, { unique: true, name: 'word_index' })
end
