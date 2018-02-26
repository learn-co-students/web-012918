class StudentsController < ApplicationController
  before_action :set_student, only: [:show]

  def index

  end

  def show

  end

  def new
    @student = Student.new
    #object id of 12
  end

  def create
    student = Student.create(student_params)
    #object 47
    redirect_to student_path(student)
  end

  private
  def student_params
    params.require(:student).permit(:name, :email, :dob)
  end

  def set_student
    @student = Student.find(params[:id])
  end
end
