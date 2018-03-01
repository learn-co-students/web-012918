class User < ApplicationRecord


  def friendly_name
    return self.name || "random user (id: #{ self.id })"
  end
end
