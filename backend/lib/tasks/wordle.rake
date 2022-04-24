namespace :wordle do
  desc 'Script to setup database and server for wordle backend'
   task :setup => :environment do
     sh "rake db:mongoid:create_indexes"
     sh "rake db:seed"
     sh "rails server -b 0.0.0.0 -p 3000"
   end
end


