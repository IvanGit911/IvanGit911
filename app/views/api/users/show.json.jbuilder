#json.partial! '/api/users/user', user: @user

json.extract! @user, :id, :username, :email
json.journals @user.journals