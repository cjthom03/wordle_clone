require_relative "boot"

# Picking and choosing which framework I want
#require "rails/all"

# Add this require instead of "rails/all":
require "rails"

# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
# require "action_mailbox/engine"
# require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
require "rails/test_unit/railtie"

# At this time ActiveStorage requires ActiveRecord and is not usable with Mongoid.
# require "active_record/railtie"
# require "active_storage/engine"equire "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WordleClone
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
     config.time_zone = "UTC"
    # config.eager_load_paths << Rails.root.join("extras")
     #
    # Add Mongoid::QueryCache::Middleware at the bottom of the middleware stack
    # or before other middleware that queries MongoDB.
    config.middleware.use Mongoid::QueryCache::Middleware
  end
end
