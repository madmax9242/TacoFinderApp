class User < ActiveRecord::Base
	
	authenticates_with_sorcery!

	validates :password, length: { minimum: 7 }
	validates :password, confirmation: true
	validates :password_confirmation, presence: true

	validates :email, uniqueness: true

	# has_many :customers
	has_many :restaurants

	# Early attempt at basic admin function
		# def is_max?
	 #    	if @user.email == 'maxd924@gmail.com'
	 #      		redirect_to :users
	 #    	end
    	# end
end