class GoogleMap < ActiveRecord::Base
	has_one :user
	belongs_to :restaurant
end