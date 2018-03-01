class User < ApplicationRecord

  # validate :password_must_have_a_length
  validates :name, uniqueness: true

  has_secure_password

  def friendly_name
    return self.name || "random user (id: #{ self.id })"
  end



  # def password=(plaintext_password)
  #   @plaintext_password_do_not_use_please_for_the_love_of_god_omg = plaintext_password
  #   self.password_digest = BCrypt::Password.create(plaintext_password)
  # end 


  # def password_must_have_a_length
  #   if @plaintext_password_do_not_use_please_for_the_love_of_god_omg.length == 0
  #     self.errors.add(:password, "must not be blank")
  #   end
  # end

  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end


end
