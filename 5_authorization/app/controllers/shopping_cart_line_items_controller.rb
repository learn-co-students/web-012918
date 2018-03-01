class ShoppingCartLineItemsController < ApplicationController

  
  def create
    @shopping_cart_line_item = ShoppingCartLineItem.new(shopping_cart_line_item_params)
    
    helpers.shopping_cart << @shopping_cart_line_item
    redirect_to "/"
  end


  # def create
  #   @scli = ShoppingCartLineItem.new(shopping_cart_line_item_params)
  #   helpers.shopping_cart = shopping_cart_line_item_params[:product_id]
  #   redirect_to "/"
  # end

  def shopping_cart_line_item_params
    params.require(:shopping_cart_line_item).permit(:product_id)
  end

end
