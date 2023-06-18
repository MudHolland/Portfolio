# Import the random library
import random

# Define a class QA
class QA:
    def __init__(self, question, correct_answer, other_answers):
        self.question = question
        self.correct_answer = correct_answer
        self.other_answers = other_answers

# Create a list of QA objects
questions = [
    QA(
        question="What is the capital of France?",
        correct_answer="Paris",
        other_answers=["Berlin", "London", "Rome"]
    ),
    QA(
        question="Who is the author of Harry Potter?",
        correct_answer="J.K. Rowling",
        other_answers=["George R.R. Martin", "J.R.R. Tolkien", "Stephen King"]
    ),
    QA(
        question="What is the name of the largest bone in the human body?",
        correct_answer="Femur",
        other_answers=["Humerus", "Tibia", "Fibula"]
    )
]

# Get the user's name
name = input("What's your name? ")

# Greet the user
print(f"Hello, {name}. Welcome to the quiz.")

# Initialize the score
score = 0

# Loop over the questions
for question in questions:
    # Print the question
    print(question.question)

    # Shuffle the possible answers
    answers = [question.correct_answer] + question.other_answers
    random.shuffle(answers)

    # Print the possible answers with numbers
    for i, answer in enumerate(answers, 1):
        print(f"{i}. {answer}")

    # Get the user's answer
    user_answer = input("Your answer: ")

    # Try to convert the user's answer to an integer
    try:
        user_answer = int(user_answer)
    except ValueError:
        # If the user's answer is not a valid number, print an error message
        print("Invalid input. Please enter a number.")
        # Skip the rest of the loop and continue with the next question
        continue

    # Check if the user's answer is in the range of possible answers
    if 1 <= user_answer <= len(answers):
        # Get the answer text from the list of answers
        answer_text = answers[user_answer - 1]
    else:
        # If the user's answer is out of range, print an error message
        print("Invalid input. Please enter a number between 1 and 4.")
        # Skip the rest of the loop and continue with the next question
        continue

    # Check if the answer text is the same as the correct answer
    if answer_text == question.correct_answer:
        # If the answer is correct, print a positive feedback and increment the score
        print("Correct!")
        score += 1
    else:
        # If the answer is wrong, print a negative feedback and the correct answer
        print("Wrong!")
        print(f"The correct answer is {question.correct_answer}.")

    # Print a blank line for spacing
    print()

# Print the final score and a farewell message
print(f"You scored {score} out of {len(questions)}.")
print(f"Thank you for playing, {name}.")