class User < ApplicationRecord


  has_secure_password

  validates :username, presence: true, uniqueness: true

  has_many :users_snacks
  has_many :snacks, through: :users_snacks

end
