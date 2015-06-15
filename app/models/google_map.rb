class GoogleMap < ActiveRecord::Base
	has_one :user
	has_many :restaurants
end