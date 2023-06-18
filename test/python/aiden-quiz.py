def aiden_quiz():
    score = 0
    questions = [
        {
            "question": "600x0=",
            "answer": "0"
        },
        {
            "question": "4x7=",
            "answer": "28"
        },
        {
            "question": "10x9",
            "answer": "90"
        },
        {
            "question": "22+50=",
            "answer": "72"
        },
        {
            "question": "17+79",
            "answer": "96"
        },
        {
            "question": "20x30=",
            "answer": "600"
        },
        {
            "question": "96:2=",
            "answer": "48"
        },
        {
            "question": "42:7=",
            "answer": "6"
        },
    ]
    for question in questions:
        print(question["question"])
        # for option in question["options"]:
        #     print(option)
        answer = input("\nType je antwoord: ")
        if answer == question["answer"]:
            score += 1
            print("\n\nGoed!\n")
        else:
            print("\n\nFout.\n")
    print("Je score is: " + str(score) + "/" + str(len(questions)))

aiden_quiz()
