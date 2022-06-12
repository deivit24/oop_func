def thing(*args, **kwargs):
    print(args)
    print(kwargs)


my_list = ["submit", "clear", "username", "password"]
thing("email", "phone", my_list)