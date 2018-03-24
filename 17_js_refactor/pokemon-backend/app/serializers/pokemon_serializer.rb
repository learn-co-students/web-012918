class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :species
end
