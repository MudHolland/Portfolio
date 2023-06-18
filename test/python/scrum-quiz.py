def scrum_quiz():
    score = 0
    questions = [
        {
            "question": "Onderhoudt en prioriteert het werk in de product backlog",
            "options": [
                "1. Product owner",
                "2. Scrum master",
                "3. Development team",
                "4. Geen van allen"
            ],
            "answer": "1"
        },
        {
            "question": "Stuurt het project/team aan",
            "options": [
                "1. Product owner",
                "2. Scrum master",
                "3. Development team",
                "4. Geen van allen"
            ],
            "answer": "4"
        },
        {
            "question": "Houdt de status van de sprint bij",
            "options": [
                "1. Product owner",
                "2. Scrum master",
                "3. Development team",
                "4. Geen van allen"
            ],
            "answer": "3"
        },
        {
            "question": "Zorgt dat iedereen de werkitems (user stories / product backlog items) begrijpt",
            "options": [
                "1. Product owner",
                "2. Scrum master",
                "3. Development team",
                "4. Geen van allen"
            ],
            "answer": "3"
        },
        {
            "question": "Coach in zelfsturing en zelforganisatie",
            "options": [
                "1. Product owner",
                "2. Scrum master",
                "3. Development team",
                "4. Geen van allen"
            ],
            "answer": "2"
        }
    ]
    for question in questions:
        print(question["question"])
        for option in question["options"]:
            print(option)
        answer = input("\nMaak je keuze: ")
        if answer == question["answer"]:
            score += 1
            print("\n\nCorrect!\n")
        else:
            print("\n\nIncorrect.\n")
    print("Je score is: " + str(score) + "/" + str(len(questions)))

scrum_quiz()
