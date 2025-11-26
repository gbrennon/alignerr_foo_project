import typer

def register_user():
    name = typer.prompt("Enter your name")
    while not name:
        typer.echo("Name cannot be empty")
        name = typer.prompt("Enter your name")
        
    email = typer.prompt("Enter your email")
    while not email:
        typer.echo("Email cannot be empty")
        email = typer.prompt("Enter your email")
        
    password = typer.prompt("Enter your password", hide_input=True)
    while not password:
        typer.echo("Password cannot be empty")
        password = typer.prompt("Enter your password", hide_input=True)
        
    typer.echo("User registration completed!")

def main():
    typer.echo("Welcome to the User Registration CLI")
    typer.echo("1. Register User")
    
    option = typer.prompt("Select an option", choices=["1"])
    
    if option == "1":
        register_user()

if __name__ == "__main__":
    typer.run(main)
