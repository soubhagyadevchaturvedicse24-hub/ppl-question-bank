const questionDatabase = {
            "Unit I": {
                name: "UNIT I: PROGRAM DESIGN",
                subtopics: {
                    "1.1": {
                        name: "Introduction - Fundamental Design Concepts",
                        priority: "low",
                        questions: [
                            {id: "Q1.1.1", text: "Define software design and explain its importance in software engineering.", meta: {year: "2022(ND)", marks: 4}},
                            {id: "Q1.1.2", text: "What are the fundamental design concepts in programming languages?", meta: {year: "2023(AM)", marks: 4}},
                            {id: "Q1.1.3", text: "Explain about: (i) Abstraction (ii) Refinement (iii) Modularity (iv) Software Architecture", meta: {year: "2020(ND)", marks: 8}}
                        ]
                    },
                    "1.2": {
                        name: "Modules and Modularization Criteria",
                        priority: "high",
                        questions: [
                            {id: "Q1.2.1", text: "Define modules and modularization criteria. Explain the criteria for breaking down a program into modules.", meta: {frequency: 7, marks: 8, years: ["2020(ND)", "2021(AM)", "2021(ND)", "2022(AM)", "2023(ND)", "2024(AM)", "2024(ND)"], priority: "highest"}},
                            {id: "Q1.2.2", text: "What are the modules and modularization criteria for programming language?", meta: {year: "2021(ND)", marks: 4}},
                            {id: "Q1.2.3", text: "Explain module and modularization criteria in brief with examples.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q1.2.4", text: "List and explain the modularization criteria for effective program design.", meta: {year: "2022(ND)", marks: 8}},
                            {id: "Q1.2.5", text: "How do you decide if a design is well-modularized? What are the key indicators?", meta: {year: "2023(AM)", marks: 4}}
                        ]
                    },
                    "1.3": {
                        name: "Design Notation - Procedure Template",
                        priority: "low",
                        questions: [
                            {id: "Q1.3.1", text: "Explain procedure template notation and its use in design documentation.", meta: {year: "2020(ND)", marks: 4}},
                            {id: "Q1.3.2", text: "What is the role of procedure templates in program design?", meta: {year: "2022(AM)", marks: 4}}
                        ]
                    },
                    "1.4": {
                        name: "Design Notation - Pseudo Code",
                        priority: "medium",
                        questions: [
                            {id: "Q1.4.1", text: "Define pseudo code with example. Explain flowchart in detail with suitable diagram.", meta: {frequency: 3, marks: 8, years: ["2021(AM)", "2023(AM)", "2024(ND)"], priority: "important"}},
                            {id: "Q1.4.2", text: "Write short notes on: (i) Structured flowchart (ii) Decision table", meta: {year: "2024(AM)", marks: 12}},
                            {id: "Q1.4.3", text: "What is the difference between pseudo code and actual code? When should you use each?", meta: {year: "2021(AM)", marks: 8}},
                            {id: "Q1.4.4", text: "Do structured flowchart decisions differ from pseudo code?", meta: {year: "2021(AM)", marks: 8}}
                        ]
                    },
                    "1.5": {
                        name: "Design Notation - Structured Flowchart",
                        priority: "low",
                        questions: [
                            {id: "Q1.5.1", text: "What is structured flowchart? Briefly explain the logic behind each step.", meta: {year: "2024(ND)", marks: 8}},
                            {id: "Q1.5.2", text: "Define flowchart and explain how it represents program logic.", meta: {years: ["2020(ND)", "2022(AM)", "2023(ND)"], marks: 8}},
                            {id: "Q1.5.3", text: "Compare structured flowcharts with unstructured flowcharts.", meta: {year: "2021(ND)", marks: 4}}
                        ]
                    },
                    "1.6": {
                        name: "Design Notation - Decision Tables",
                        priority: "low",
                        questions: [
                            {id: "Q1.6.1", text: "Explain decision tables and their role in program design.", meta: {year: "2024(AM)", marks: 12}},
                            {id: "Q1.6.2", text: "How are decision tables useful in testing and design?", meta: {year: "2021(AM)", marks: 4}}
                        ]
                    },
                    "1.7": {
                        name: "Design Techniques - Stepwise Refinement",
                        priority: "medium",
                        questions: [
                            {id: "Q1.7.1", text: "Explain stepwise refinement design technique.", meta: {years: ["2020(ND)", "2021(ND)", "2023(AM)", "2024(ND)"], frequency: 4, marks: 8}},
                            {id: "Q1.7.2", text: "How does stepwise refinement improve program design quality?", meta: {year: "2022(ND)", marks: 4}},
                            {id: "Q1.7.3", text: "Provide an example of stepwise refinement in solving a complex problem.", meta: {year: "2023(ND)", marks: 8}}
                        ]
                    },
                    "1.8": {
                        name: "Design Techniques - Levels of Abstraction",
                        priority: "high",
                        questions: [
                            {id: "Q1.8.1", text: "Define different levels of abstraction and illustrate how it contributes to maintainability and flexibility with examples.", meta: {frequency: 5, marks: 8, years: ["2020(ND)", "2021(ND)", "2021(AM)", "2023(AM)", "2024(ND)"], priority: "high"}},
                            {id: "Q1.8.2", text: "Explain about abstraction, refinement, modularity and software architecture.", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q1.8.3", text: "How does abstraction help in designing large programs?", meta: {year: "2022(AM)", marks: 4}}
                        ]
                    },
                    "1.9": {
                        name: "Design Techniques - Top-Down Approach",
                        priority: "low",
                        questions: [
                            {id: "Q1.9.1", text: "Compare top-down and bottom-up approaches in program design.", meta: {years: ["2021(AM)", "2022(ND)", "2024(AM)"], frequency: 3, marks: 4}},
                            {id: "Q1.9.2", text: "Explain top-down design approach with example.", meta: {year: "2023(AM)", marks: 8}},
                            {id: "Q1.9.3", text: "What are advantages and disadvantages of top-down design?", meta: {year: "2020(ND)", marks: 4}}
                        ]
                    },
                    "1.10": {
                        name: "Program Verification",
                        priority: "medium",
                        questions: [
                            {id: "Q1.10.1", text: "What is program verification? Explain program proving with example.", meta: {frequency: 4, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(AM)", "2023(ND)"], priority: "medium"}},
                            {id: "Q1.10.2", text: "Explain correctness proofs and their importance in program design.", meta: {type: "verification"}}
                        ]
                    },
                    "1.11": {
                        name: "Software Reliability & Quality",
                        priority: "low",
                        questions: [
                            {id: "Q1.11.1", text: "Define software quality and explain various quality metrics.", meta: {year: "2021(AM)", marks: 4}},
                            {id: "Q1.11.2", text: "What is software reliability? How is it measured?", meta: {year: "2023(ND)", marks: 4}}
                        ]
                    },
                    "1.12": {
                        name: "Design Patterns",
                        priority: "low",
                        questions: [
                            {id: "Q1.12.1", text: "What are design patterns? Explain with examples.", meta: {year: "2022(AM)", marks: 8}},
                            {id: "Q1.12.2", text: "Discuss common design patterns used in software development.", meta: {year: "2024(AM)", marks: 4}}
                        ]
                    },
                    "1.13": {
                        name: "General Program Design",
                        priority: "low",
                        questions: [
                            {id: "Q1.13.1", text: "Explain various program design methodologies.", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q1.13.2", text: "What factors should be considered when designing a program?", meta: {year: "2021(ND)", marks: 4}}
                        ]
                    }
                }
            },
            "Unit II": {
                name: "UNIT II: LANGUAGE CHARACTERISTICS",
                subtopics: {
                    "2.1": {
                        name: "Programming Language Characteristics",
                        priority: "high",
                        questions: [
                            {id: "Q2.1.1", text: "List and explain the characteristics of programming languages with examples.", meta: {frequency: 4, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(ND)", "2023(AM)"], priority: "high"}},
                            {id: "Q2.1.2", text: "What are the key features that distinguish different programming paradigms?", meta: {year: "2024(ND)", marks: 4}},
                            {id: "Q2.1.3", text: "Explain the evolution of programming languages.", meta: {year: "2022(AM)", marks: 8}}
                        ]
                    },
                    "2.2": {
                        name: "Regular Expressions",
                        priority: "high",
                        questions: [
                            {id: "Q2.2.1", text: "What is regular expressions with examples? Explain in detail.", meta: {frequency: 4, marks: 8, years: ["2020(ND)", "2021(ND)", "2022(AM)", "2024(ND)"], priority: "high"}},
                            {id: "Q2.2.2", text: "Write regular expressions for common patterns (email, phone, etc.).", meta: {year: "2023(AM)", marks: 4}},
                            {id: "Q2.2.3", text: "Explain the use of regular expressions in language processing.", meta: {year: "2021(AM)", marks: 8}}
                        ]
                    },
                    "2.3": {
                        name: "Syntax and Semantics",
                        priority: "high",
                        questions: [
                            {id: "Q2.3.1", text: "Define syntax and semantics. Explain their importance in programming languages.", meta: {frequency: 3, marks: 8, years: ["2022(AM)", "2023(ND)", "2024(AM)"], priority: "high"}},
                            {id: "Q2.3.2", text: "What is the difference between syntax and semantics?", meta: {year: "2020(ND)", marks: 4}},
                            {id: "Q2.3.3", text: "Explain syntax-directed translation.", meta: {year: "2021(ND)", marks: 8}}
                        ]
                    },
                    "2.4": {
                        name: "BNF (Backus-Naur Form)",
                        priority: "high",
                        questions: [
                            {id: "Q2.4.1", text: "Define BNF and explain its use in syntax specification. Provide examples.", meta: {frequency: 5, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(AM)", "2023(ND)", "2024(AM)"], priority: "high"}},
                            {id: "Q2.4.2", text: "Write BNF grammars for simple arithmetic expressions.", meta: {type: "practical"}},
                            {id: "Q2.4.3", text: "What is EBNF? How does it differ from BNF?", meta: {type: "comparison"}}
                        ]
                    },
                    "2.5": {
                        name: "Ambiguity in Grammars",
                        priority: "medium",
                        questions: [
                            {id: "Q2.5.1", text: "What is ambiguity in grammars? How can it be resolved?", meta: {frequency: 2, marks: 8, years: ["2021(ND)", "2023(AM)"], priority: "medium"}},
                            {id: "Q2.5.2", text: "Provide examples of ambiguous and unambiguous grammars.", meta: {year: "2020(ND)", marks: 4}},
                            {id: "Q2.5.3", text: "Explain operator precedence and associativity in resolving ambiguity.", meta: {year: "2022(AM)", marks: 8}}
                        ]
                    },
                    "2.6": {
                        name: "Parsing Techniques",
                        priority: "medium",
                        questions: [
                            {id: "Q2.6.1", text: "Explain top-down and bottom-up parsing approaches.", meta: {frequency: 3, marks: 8, years: ["2020(ND)", "2022(AM)", "2023(ND)"], priority: "medium"}},
                            {id: "Q2.6.2", text: "What is recursive descent parsing?", meta: {year: "2024(ND)", marks: 4}},
                            {id: "Q2.6.3", text: "Explain shift-reduce parsing with example.", meta: {year: "2021(AM)", marks: 8}}
                        ]
                    },
                    "2.7": {
                        name: "Symbol Table",
                        priority: "medium",
                        questions: [
                            {id: "Q2.7.1", text: "What is a symbol table? Explain its role in compilation.", meta: {frequency: 2, marks: 8, years: ["2021(AM)", "2024(ND)"], priority: "medium"}},
                            {id: "Q2.7.2", text: "Describe the data structures used for implementing symbol tables.", meta: {year: "2022(ND)", marks: 4}},
                            {id: "Q2.7.3", text: "Explain the operations performed on symbol tables.", meta: {year: "2023(AM)", marks: 4}}
                        ]
                    },
                    "2.8": {
                        name: "Type Checking",
                        priority: "medium",
                        questions: [
                            {id: "Q2.8.1", text: "Explain type checking and type conversion in programming languages.", meta: {frequency: 2, marks: 8, years: ["2022(ND)", "2024(AM)"], priority: "medium"}},
                            {id: "Q2.8.2", text: "What is the difference between static and dynamic type checking?", meta: {year: "2021(ND)", marks: 4}},
                            {id: "Q2.8.3", text: "Explain type coercion with examples.", meta: {year: "2023(AM)", marks: 4}}
                        ]
                    },
                    "2.9": {
                        name: "Binding and Scope",
                        priority: "medium",
                        questions: [
                            {id: "Q2.9.1", text: "Explain binding time and scope rules in programming languages.", meta: {frequency: 3, marks: 8, years: ["2020(ND)", "2021(ND)", "2023(AM)"], priority: "medium"}},
                            {id: "Q2.9.2", text: "What is the difference between static and dynamic scoping?", meta: {year: "2024(ND)", marks: 4}},
                            {id: "Q2.9.3", text: "Explain lexical scoping with examples.", meta: {year: "2022(AM)", marks: 4}}
                        ]
                    },
                    "2.10": {
                        name: "Memory Management",
                        priority: "low",
                        questions: [
                            {id: "Q2.10.1", text: "Explain memory allocation strategies in programming languages.", meta: {year: "2021(AM)", marks: 4}},
                            {id: "Q2.10.2", text: "What is garbage collection? Explain different garbage collection techniques.", meta: {year: "2023(ND)", marks: 8}},
                            {id: "Q2.10.3", text: "Describe stack and heap memory management.", meta: {year: "2022(ND)", marks: 4}}
                        ]
                    },
                    "2.11": {
                        name: "Runtime Environment",
                        priority: "low",
                        questions: [
                            {id: "Q2.11.1", text: "Explain the runtime environment of a programming language.", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q2.11.2", text: "What is an activation record? Describe its structure.", meta: {year: "2024(AM)", marks: 4}},
                            {id: "Q2.11.3", text: "Explain parameter passing mechanisms (call by value, call by reference).", meta: {year: "2021(ND)", marks: 4}}
                        ]
                    }
                }
            },
            "Unit III": {
                name: "UNIT III: FUNCTIONAL & LOGIC PROGRAMMING",
                subtopics: {
                    "3.1": {
                        name: "LISP - Introduction & Fundamentals",
                        priority: "high",
                        questions: [
                            {id: "Q3.1.1", text: "Explain LISP programming language with examples. What are its key features?", meta: {frequency: 6, marks: 8, years: ["2020(ND)", "2021(AM)", "2021(ND)", "2022(AM)", "2023(ND)", "2024(AM)"], priority: "highest"}},
                            {id: "Q3.1.2", text: "What is functional programming? Explain with LISP examples.", meta: {year: "2024(ND)", marks: 8}},
                            {id: "Q3.1.3", text: "Describe the history and evolution of LISP.", meta: {year: "2022(ND)", marks: 4}}
                        ]
                    },
                    "3.2": {
                        name: "LISP - Data Structures & S-expressions",
                        priority: "high",
                        questions: [
                            {id: "Q3.2.1", text: "Explain atoms and lists in LISP. What are S-expressions?", meta: {frequency: 4, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(ND)", "2023(ND)"], priority: "high"}},
                            {id: "Q3.2.2", text: "How are data structures represented in LISP?", meta: {year: "2024(AM)", marks: 4}},
                            {id: "Q3.2.3", text: "Explain the concept of symbolic expressions.", meta: {year: "2021(ND)", marks: 4}}
                        ]
                    },
                    "3.3": {
                        name: "LISP - Basic Operations (CAR, CDR, CONS)",
                        priority: "high",
                        questions: [
                            {id: "Q3.3.1", text: "Write LISP programs to demonstrate list operations (CAR, CDR, CONS).", meta: {frequency: 5, marks: 8, years: ["2021(ND)", "2022(AM)", "2023(AM)", "2023(ND)", "2024(ND)"], priority: "high"}},
                            {id: "Q3.3.2", text: "Explain the purpose of CAR and CDR functions with examples.", meta: {year: "2020(ND)", marks: 4}},
                            {id: "Q3.3.3", text: "Write a LISP program to reverse a list using CAR, CDR, and CONS.", meta: {year: "2024(AM)", marks: 8}}
                        ]
                    },
                    "3.4": {
                        name: "LISP - Functions & Recursion",
                        priority: "medium",
                        questions: [
                            {id: "Q3.4.1", text: "Explain function definition in LISP using DEFUN.", meta: {frequency: 3, marks: 8, years: ["2021(AM)", "2022(ND)", "2024(AM)"], priority: "medium"}},
                            {id: "Q3.4.2", text: "Write recursive LISP functions for factorial, fibonacci, etc.", meta: {year: "2023(AM)", marks: 8}},
                            {id: "Q3.4.3", text: "Explain lambda expressions in LISP.", meta: {year: "2020(ND)", marks: 4}}
                        ]
                    },
                    "3.5": {
                        name: "LISP - Predicates",
                        priority: "medium",
                        questions: [
                            {id: "Q3.5.1", text: "Explain LISP predicates: NULL, ATOM, EQ, EQUAL, LISTP.", meta: {frequency: 2, marks: 8, years: ["2021(ND)", "2023(AM)"], priority: "medium"}},
                            {id: "Q3.5.2", text: "Write LISP programs using predicates for list checking.", meta: {year: "2024(ND)", marks: 8}},
                            {id: "Q3.5.3", text: "What is the difference between EQ and EQUAL in LISP?", meta: {year: "2022(AM)", marks: 4}}
                        ]
                    },
                    "3.6": {
                        name: "LISP - Control Constructs",
                        priority: "medium",
                        questions: [
                            {id: "Q3.6.1", text: "Explain control constructs in LISP: COND, IF.", meta: {frequency: 2, marks: 8, years: ["2022(AM)", "2024(ND)"], priority: "medium"}},
                            {id: "Q3.6.2", text: "What is COND in LISP and how is it used?", meta: {year: "2021(AM)", marks: 4}},
                            {id: "Q3.6.3", text: "Write a simple LISP program using control constructs.", meta: {year: "2023(ND)", marks: 8}}
                        ]
                    },
                    "3.7": {
                        name: "LISP - List Processing",
                        priority: "medium",
                        questions: [
                            {id: "Q3.7.1", text: "Explain list processing functions in LISP: APPEND, LENGTH, REVERSE.", meta: {frequency: 2, marks: 8, years: ["2020(ND)", "2023(ND)"], priority: "medium"}},
                            {id: "Q3.7.2", text: "Write LISP programs for common list operations.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q3.7.3", text: "Explain MAP functions in LISP (MAPCAR, MAPLIST).", meta: {year: "2022(ND)", marks: 4}}
                        ]
                    },
                    "3.8": {
                        name: "PROLOG - Introduction",
                        priority: "medium",
                        questions: [
                            {id: "Q3.8.1", text: "Define PROLOG and explain its significance as a logic programming language.", meta: {frequency: 2, marks: 8, years: ["2021(AM)", "2023(ND)"], priority: "medium"}},
                            {id: "Q3.8.2", text: "What are the key features and principles of PROLOG?", meta: {year: "2024(AM)", marks: 4}},
                            {id: "Q3.8.3", text: "Explain the declarative programming paradigm.", meta: {year: "2022(ND)", marks: 4}}
                        ]
                    },
                    "3.9": {
                        name: "PROLOG - Facts, Rules & Queries",
                        priority: "high",
                        questions: [
                            {id: "Q3.9.1", text: "Explain PROLOG programming language with examples. Discuss facts, rules, and queries.", meta: {frequency: 4, marks: 8, years: ["2021(AM)", "2022(ND)", "2023(AM)", "2024(AM)"], priority: "high"}},
                            {id: "Q3.9.2", text: "Write PROLOG programs for: (i) Facts (ii) Rules (iii) Queries", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q3.9.3", text: "Explain the structure of PROLOG programs.", meta: {year: "2024(ND)", marks: 4}}
                        ]
                    },
                    "3.10": {
                        name: "PROLOG - Lists",
                        priority: "medium",
                        questions: [
                            {id: "Q3.10.1", text: "Explain list operations in PROLOG. Write programs for common list operations.", meta: {frequency: 3, marks: 8, years: ["2021(ND)", "2022(AM)", "2024(ND)"], priority: "medium"}},
                            {id: "Q3.10.2", text: "How are lists represented in PROLOG? Give examples.", meta: {year: "2023(AM)", marks: 4}},
                            {id: "Q3.10.3", text: "Write PROLOG programs for list manipulation (append, reverse, member).", meta: {year: "2020(ND)", marks: 8}}
                        ]
                    },
                    "3.11": {
                        name: "PROLOG - Family Tree & Relations",
                        priority: "medium",
                        questions: [
                            {id: "Q3.11.1", text: "Write PROLOG programs for family tree relations and queries.", meta: {frequency: 3, marks: 8, years: ["2021(ND)", "2023(ND)", "2024(ND)"], priority: "medium"}},
                            {id: "Q3.11.2", text: "Explain how to define relationships in PROLOG.", meta: {year: "2022(AM)", marks: 4}},
                            {id: "Q3.11.3", text: "Write PROLOG rules for ancestor, descendant, sibling relationships.", meta: {year: "2024(AM)", marks: 8}}
                        ]
                    },
                    "3.12": {
                        name: "PROLOG - Operators & Arithmetic",
                        priority: "low",
                        questions: [
                            {id: "Q3.12.1", text: "Explain operators and arithmetic operations in PROLOG with examples.", meta: {frequency: 2, marks: 8, years: ["2022(ND)", "2023(AM)"], priority: "low"}},
                            {id: "Q3.12.2", text: "Write PROLOG programs to perform arithmetic calculations.", meta: {year: "2021(AM)", marks: 8}},
                            {id: "Q3.12.3", text: "Explain the 'is' operator in PROLOG.", meta: {year: "2024(ND)", marks: 4}}
                        ]
                    },
                    "3.13": {
                        name: "PROLOG - Control & Backtracking",
                        priority: "medium",
                        questions: [
                            {id: "Q3.13.1", text: "Explain control constructs in PROLOG: (i) Cut (!) (ii) Fail (iii) Backtracking", meta: {frequency: 2, marks: 8, years: ["2023(ND)", "2024(AM)"], priority: "medium"}},
                            {id: "Q3.13.2", text: "What is backtracking in PROLOG and how does it work?", meta: {year: "2021(ND)", marks: 8}},
                            {id: "Q3.13.3", text: "Explain the use of cut operator with examples.", meta: {year: "2022(AM)", marks: 4}}
                        ]
                    },
                    "3.14": {
                        name: "PROLOG - Unification",
                        priority: "low",
                        questions: [
                            {id: "Q3.14.1", text: "Explain unification and pattern matching in PROLOG.", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q3.14.2", text: "How does PROLOG use unification to solve queries?", meta: {year: "2023(AM)", marks: 4}},
                            {id: "Q3.14.3", text: "Provide examples of unification in PROLOG.", meta: {year: "2024(AM)", marks: 4}}
                        ]
                    },
                    "3.15": {
                        name: "Comparison - LISP vs PROLOG",
                        priority: "low",
                        questions: [
                            {id: "Q3.15.1", text: "Compare LISP and PROLOG programming paradigms. Explain their differences.", meta: {frequency: 2, marks: 8, years: ["2022(AM)", "2023(ND)"], priority: "low"}},
                            {id: "Q3.15.2", text: "Discuss the advantages and disadvantages of functional and logic programming languages.", meta: {year: "2021(AM)", marks: 8}},
                            {id: "Q3.15.3", text: "When would you choose LISP over PROLOG and vice versa?", meta: {year: "2024(ND)", marks: 4}}
                        ]
                    }
                }
            },
            "Unit IV": {
                name: "UNIT IV: OOP CONCEPTS-I",
                subtopics: {
                    "4.1": {
                        name: "OOP Concepts Introduction",
                        priority: "high",
                        questions: [
                            {id: "Q4.1.1", text: "Define and explain basic OOP concepts: Object, Class, Encapsulation, Abstraction, Data Hiding, Inheritance, Polymorphism, Message Passing.", meta: {frequency: 5, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(ND)", "2023(AM)", "2024(ND)"], priority: "highest"}},
                            {id: "Q4.1.2", text: "What is the difference between a class and an object?", meta: {year: "2024(AM)", marks: 4}},
                            {id: "Q4.1.3", text: "Explain encapsulation and data hiding with example.", meta: {year: "2021(ND)", marks: 8}}
                        ]
                    },
                    "4.2": {
                        name: "C++ Program Structure",
                        priority: "medium",
                        questions: [
                            {id: "Q4.2.1", text: "Explain the basic structure of a C++ program with examples.", meta: {frequency: 2, marks: 8, years: ["2021(ND)", "2023(AM)"], priority: "medium"}},
                            {id: "Q4.2.2", text: "What are the main components of a C++ program?", meta: {year: "2022(ND)", marks: 4}},
                            {id: "Q4.2.3", text: "Write a simple C++ program that demonstrates basic structure.", meta: {year: "2020(ND)", marks: 8}}
                        ]
                    },
                    "4.3": {
                        name: "Classes and Objects",
                        priority: "high",
                        questions: [
                            {id: "Q4.3.1", text: "What are classes and objects? Explain with C++ examples.", meta: {frequency: 6, marks: 8, years: ["2020(ND)", "2021(AM)", "2021(ND)", "2022(AM)", "2023(ND)", "2024(AM)"], priority: "highest"}},
                            {id: "Q4.3.2", text: "Write C++ programs demonstrating class definition and object creation.", meta: {year: "2024(ND)", marks: 8}},
                            {id: "Q4.3.3", text: "Explain member functions and data members.", meta: {year: "2023(AM)", marks: 4}}
                        ]
                    },
                    "4.4": {
                        name: "Access Specifiers",
                        priority: "high",
                        questions: [
                            {id: "Q4.4.1", text: "What are access specifiers in C++? Explain public, private, and protected with examples.", meta: {frequency: 3, marks: 8, years: ["2021(ND)", "2022(ND)", "2024(AM)"], priority: "high"}},
                            {id: "Q4.4.2", text: "Explain data hiding using access specifiers.", meta: {year: "2023(ND)", marks: 4}},
                            {id: "Q4.4.3", text: "Write C++ programs demonstrating access control.", meta: {year: "2020(ND)", marks: 8}}
                        ]
                    },
                    "4.5": {
                        name: "Inheritance",
                        priority: "high",
                        questions: [
                            {id: "Q4.5.1", text: "Explain inheritance in C++. Discuss types of inheritance with examples.", meta: {frequency: 5, marks: 8, years: ["2020(ND)", "2021(ND)", "2022(AM)", "2023(AM)", "2024(ND)"], priority: "highest"}},
                            {id: "Q4.5.2", text: "Write C++ programs demonstrating single, multiple, multilevel inheritance.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q4.5.3", text: "Explain virtual base class and its use in diamond problem.", meta: {year: "2021(AM)", marks: 8}}
                        ]
                    },
                    "4.6": {
                        name: "Polymorphism",
                        priority: "high",
                        questions: [
                            {id: "Q4.6.1", text: "What is polymorphism? Explain compile-time and runtime polymorphism with examples.", meta: {frequency: 4, marks: 8, years: ["2021(AM)", "2022(ND)", "2023(ND)", "2024(AM)"], priority: "high"}},
                            {id: "Q4.6.2", text: "Explain function overloading as compile-time polymorphism.", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q4.6.3", text: "Explain virtual functions as runtime polymorphism.", meta: {year: "2023(AM)", marks: 8}}
                        ]
                    },
                    "4.7": {
                        name: "Pointers and References",
                        priority: "high",
                        questions: [
                            {id: "Q4.7.1", text: "Explain pointers in C++. What is the difference between pointers and references?", meta: {frequency: 3, marks: 8, years: ["2021(AM)", "2022(ND)", "2024(ND)"], priority: "high"}},
                            {id: "Q4.7.2", text: "Write C++ programs demonstrating pointer operations.", meta: {year: "2023(ND)", marks: 8}},
                            {id: "Q4.7.3", text: "Explain this pointer in C++.", meta: {year: "2024(AM)", marks: 4}}
                        ]
                    },
                    "4.8": {
                        name: "Memory Management (new/delete)",
                        priority: "high",
                        questions: [
                            {id: "Q4.8.1", text: "Explain new and delete operators in C++. How do they differ from malloc and free?", meta: {frequency: 5, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(AM)", "2023(ND)", "2024(ND)"], priority: "highest"}},
                            {id: "Q4.8.2", text: "Write C++ programs using dynamic memory allocation.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q4.8.3", text: "Explain memory leaks and how to prevent them.", meta: {year: "2022(ND)", marks: 4}}
                        ]
                    },
                    "4.9": {
                        name: "Inline Functions",
                        priority: "medium",
                        questions: [
                            {id: "Q4.9.1", text: "What are inline functions in C++? Explain their advantages and disadvantages.", meta: {frequency: 2, marks: 8, years: ["2021(ND)", "2023(AM)"], priority: "medium"}},
                            {id: "Q4.9.2", text: "When should you use inline functions?", meta: {year: "2024(ND)", marks: 4}},
                            {id: "Q4.9.3", text: "Write C++ examples demonstrating inline functions.", meta: {year: "2022(AM)", marks: 8}}
                        ]
                    },
                    "4.10": {
                        name: "Static Members",
                        priority: "medium",
                        questions: [
                            {id: "Q4.10.1", text: "Explain static data members and static member functions in C++.", meta: {frequency: 3, marks: 8, years: ["2020(ND)", "2022(AM)", "2024(AM)"], priority: "medium"}},
                            {id: "Q4.10.2", text: "Write C++ programs demonstrating static members.", meta: {year: "2023(ND)", marks: 8}},
                            {id: "Q4.10.3", text: "What is the difference between static and non-static members?", meta: {year: "2021(AM)", marks: 4}}
                        ]
                    },
                    "4.11": {
                        name: "Const Keyword",
                        priority: "low",
                        questions: [
                            {id: "Q4.11.1", text: "Explain the use of const keyword in C++: const variables, const functions, const parameters.", meta: {frequency: 2, marks: 8, years: ["2021(AM)", "2023(ND)"], priority: "low"}},
                            {id: "Q4.11.2", text: "What are const member functions?", meta: {year: "2022(ND)", marks: 4}},
                            {id: "Q4.11.3", text: "Explain mutable keyword in C++.", meta: {year: "2024(AM)", marks: 4}}
                        ]
                    },
                    "4.12": {
                        name: "Scope Resolution",
                        priority: "low",
                        questions: [
                            {id: "Q4.12.1", text: "Explain scope resolution operator (::) in C++.", meta: {year: "2020(ND)", marks: 4}},
                            {id: "Q4.12.2", text: "Write C++ programs demonstrating scope resolution.", meta: {year: "2023(AM)", marks: 8}},
                            {id: "Q4.12.3", text: "Explain namespace and scope resolution.", meta: {year: "2021(ND)", marks: 4}}
                        ]
                    },
                    "4.13": {
                        name: "Namespaces",
                        priority: "low",
                        questions: [
                            {id: "Q4.13.1", text: "What are namespaces in C++? Explain with examples.", meta: {year: "2022(AM)", marks: 8}},
                            {id: "Q4.13.2", text: "How do namespaces prevent name collision?", meta: {year: "2024(ND)", marks: 4}},
                            {id: "Q4.13.3", text: "Explain using directive and using declaration.", meta: {year: "2023(ND)", marks: 4}}
                        ]
                    },
                    "4.14": {
                        name: "Arrays and Strings in C++",
                        priority: "low",
                        questions: [
                            {id: "Q4.14.1", text: "Explain array handling in C++.", meta: {year: "2021(AM)", marks: 4}},
                            {id: "Q4.14.2", text: "What is the string class in C++?", meta: {year: "2023(AM)", marks: 4}},
                            {id: "Q4.14.3", text: "Write C++ programs for string manipulation.", meta: {year: "2024(AM)", marks: 8}}
                        ]
                    },
                    "4.15": {
                        name: "Type Casting",
                        priority: "low",
                        questions: [
                            {id: "Q4.15.1", text: "Explain type casting in C++: static_cast, dynamic_cast, const_cast, reinterpret_cast.", meta: {year: "2022(ND)", marks: 8}},
                            {id: "Q4.15.2", text: "What is the difference between C-style and C++ style casting?", meta: {year: "2023(ND)", marks: 4}},
                            {id: "Q4.15.3", text: "Write C++ examples demonstrating type casting.", meta: {year: "2024(ND)", marks: 8}}
                        ]
                    },
                    "4.16": {
                        name: "OOP General Concepts",
                        priority: "low",
                        questions: [
                            {id: "Q4.16.1", text: "Explain the benefits of object-oriented programming.", meta: {year: "2020(ND)", marks: 4}},
                            {id: "Q4.16.2", text: "Compare procedural and object-oriented programming.", meta: {year: "2022(AM)", marks: 8}},
                            {id: "Q4.16.3", text: "What are the principles of good OOP design?", meta: {year: "2021(ND)", marks: 4}}
                        ]
                    }
                }
            },
            "Unit V": {
                name: "UNIT V: OOP CONCEPTS-II",
                subtopics: {
                    "5.1": {
                        name: "Constructors and Destructors",
                        priority: "high",
                        questions: [
                            {id: "Q5.1.1", text: "Explain constructors and destructors in C++. Discuss their types and uses.", meta: {frequency: 6, marks: 8, years: ["2020(ND)", "2021(AM)", "2021(ND)", "2022(AM)", "2023(ND)", "2024(AM)"], priority: "highest"}},
                            {id: "Q5.1.2", text: "Write C++ programs demonstrating default, parameterized, and copy constructors.", meta: {frequency: 4, marks: 8, years: ["2021(ND)", "2022(ND)", "2023(AM)", "2024(ND)"], priority: "high"}},
                            {id: "Q5.1.3", text: "Explain constructor overloading with examples.", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q5.1.4", text: "What is a destructor? When is it called?", meta: {year: "2024(AM)", marks: 4}}
                        ]
                    },
                    "5.2": {
                        name: "Operator Overloading",
                        priority: "high",
                        questions: [
                            {id: "Q5.2.1", text: "What is operator overloading in C++? Explain with examples (binary and unary).", meta: {frequency: 5, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(AM)", "2023(ND)", "2024(AM)"], priority: "highest"}},
                            {id: "Q5.2.2", text: "Write C++ programs overloading arithmetic operators (+, -, *, /).", meta: {year: "2024(ND)", marks: 8}},
                            {id: "Q5.2.3", text: "Explain overloading of increment/decrement operators.", meta: {year: "2022(ND)", marks: 8}},
                            {id: "Q5.2.4", text: "Can all operators be overloaded? Explain.", meta: {year: "2023(AM)", marks: 4}}
                        ]
                    },
                    "5.3": {
                        name: "Friend Functions and Classes",
                        priority: "high",
                        questions: [
                            {id: "Q5.3.1", text: "Explain friend functions and friend classes in C++. What are their uses?", meta: {frequency: 7, marks: 8, years: ["2020(ND)", "2021(AM)", "2021(ND)", "2022(AM)", "2023(AM)", "2023(ND)", "2024(ND)"], priority: "highest"}},
                            {id: "Q5.3.2", text: "Write C++ programs demonstrating friend functions accessing private members.", meta: {frequency: 4, marks: 8, years: ["2021(ND)", "2022(ND)", "2023(ND)", "2024(AM)"], priority: "high"}},
                            {id: "Q5.3.3", text: "What are the advantages and disadvantages of friend functions?", meta: {year: "2020(ND)", marks: 4}},
                            {id: "Q5.3.4", text: "Explain friend functions for operator overloading.", meta: {year: "2024(ND)", marks: 8}}
                        ]
                    },
                    "5.4": {
                        name: "Function Overloading",
                        priority: "high",
                        questions: [
                            {id: "Q5.4.1", text: "What is function overloading in C++? Explain with examples.", meta: {frequency: 5, marks: 8, years: ["2020(ND)", "2021(AM)", "2022(AM)", "2023(AM)", "2024(ND)"], priority: "highest"}},
                            {id: "Q5.4.2", text: "Write C++ programs demonstrating function overloading.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q5.4.3", text: "Explain function overloading resolution rules.", meta: {year: "2022(ND)", marks: 4}},
                            {id: "Q5.4.4", text: "What is the difference between function overloading and function overriding?", meta: {year: "2023(ND)", marks: 4}}
                        ]
                    },
                    "5.5": {
                        name: "Virtual Functions",
                        priority: "high",
                        questions: [
                            {id: "Q5.5.1", text: "Explain virtual functions and pure virtual functions. Discuss their role in polymorphism.", meta: {frequency: 4, marks: 8, years: ["2021(AM)", "2022(ND)", "2023(ND)", "2024(AM)"], priority: "high"}},
                            {id: "Q5.5.2", text: "Write C++ programs demonstrating virtual functions.", meta: {year: "2020(ND)", marks: 8}},
                            {id: "Q5.5.3", text: "Explain virtual table (vtable) mechanism.", meta: {year: "2024(ND)", marks: 4}},
                            {id: "Q5.5.4", text: "What is a virtual destructor? When is it needed?", meta: {year: "2023(AM)", marks: 4}}
                        ]
                    },
                    "5.6": {
                        name: "Abstract Classes and Interfaces",
                        priority: "high",
                        questions: [
                            {id: "Q5.6.1", text: "What are abstract classes in C++? How do they differ from interfaces?", meta: {frequency: 3, marks: 8, years: ["2021(ND)", "2023(AM)", "2024(ND)"], priority: "high"}},
                            {id: "Q5.6.2", text: "Write C++ programs demonstrating abstract classes.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q5.6.3", text: "Explain the concept of interface in C++.", meta: {year: "2022(AM)", marks: 4}},
                            {id: "Q5.6.4", text: "When should you use abstract classes?", meta: {year: "2020(ND)", marks: 4}}
                        ]
                    },
                    "5.7": {
                        name: "Exception Handling",
                        priority: "high",
                        questions: [
                            {id: "Q5.7.1", text: "Explain exception handling in C++ (try, catch, throw). Provide examples.", meta: {frequency: 4, marks: 8, years: ["2020(ND)", "2021(ND)", "2022(AM)", "2024(AM)"], priority: "high"}},
                            {id: "Q5.7.2", text: "How do you create custom exception classes?", meta: {year: "2023(ND)", marks: 8}},
                            {id: "Q5.7.3", text: "Write C++ program demonstrating exception handling with multiple catch blocks.", meta: {year: "2024(ND)", marks: 8}},
                            {id: "Q5.7.4", text: "Explain exception specification and noexcept.", meta: {year: "2022(ND)", marks: 4}}
                        ]
                    },
                    "5.8": {
                        name: "Templates",
                        priority: "high",
                        questions: [
                            {id: "Q5.8.1", text: "Explain function templates and class templates in C++ with examples.", meta: {frequency: 3, marks: 8, years: ["2021(AM)", "2023(ND)", "2024(ND)"], priority: "high"}},
                            {id: "Q5.8.2", text: "What are template specializations? Explain full and partial specialization.", meta: {year: "2022(AM)", marks: 8}},
                            {id: "Q5.8.3", text: "Write a C++ generic sort template function.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q5.8.4", text: "Explain variadic templates in C++11.", meta: {year: "2023(AM)", marks: 4}}
                        ]
                    },
                    "5.9": {
                        name: "STL (Standard Template Library)",
                        priority: "medium",
                        questions: [
                            {id: "Q5.9.1", text: "Explain Standard Template Library (STL) components: containers, iterators, algorithms.", meta: {frequency: 2, marks: 8, years: ["2022(ND)", "2024(AM)"], priority: "medium"}},
                            {id: "Q5.9.2", text: "Write C++ programs using STL vectors, lists, maps.", meta: {year: "2023(AM)", marks: 8}},
                            {id: "Q5.9.3", text: "Explain STL algorithms (sort, find, binary_search).", meta: {year: "2024(ND)", marks: 4}},
                            {id: "Q5.9.4", text: "What are iterators in STL? Explain different types.", meta: {year: "2021(ND)", marks: 4}}
                        ]
                    },
                    "5.10": {
                        name: "File Handling in C++",
                        priority: "medium",
                        questions: [
                            {id: "Q5.10.1", text: "Explain file handling in C++: fstream, ifstream, ofstream.", meta: {frequency: 2, marks: 8, years: ["2021(ND)", "2023(AM)"], priority: "medium"}},
                            {id: "Q5.10.2", text: "Write C++ programs for reading and writing files.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q5.10.3", text: "Explain file modes and file operations.", meta: {year: "2022(ND)", marks: 4}},
                            {id: "Q5.10.4", text: "How do you handle binary files in C++?", meta: {year: "2020(ND)", marks: 4}}
                        ]
                    },
                    "5.11": {
                        name: "Multiple Inheritance & Diamond Problem",
                        priority: "medium",
                        questions: [
                            {id: "Q5.11.1", text: "Explain multiple inheritance and diamond problem in C++.", meta: {frequency: 2, marks: 8, years: ["2022(AM)", "2023(ND)"], priority: "medium"}},
                            {id: "Q5.11.2", text: "How is the diamond problem resolved using virtual base class?", meta: {year: "2024(ND)", marks: 8}},
                            {id: "Q5.11.3", text: "Write C++ programs demonstrating multiple inheritance.", meta: {year: "2021(AM)", marks: 8}}
                        ]
                    },
                    "5.12": {
                        name: "Copy Constructor & Assignment",
                        priority: "medium",
                        questions: [
                            {id: "Q5.12.1", text: "Explain copy constructor and copy assignment operator in C++.", meta: {frequency: 2, marks: 8, years: ["2021(AM)", "2024(ND)"], priority: "medium"}},
                            {id: "Q5.12.2", text: "What is shallow copy vs deep copy?", meta: {year: "2023(AM)", marks: 4}},
                            {id: "Q5.12.3", text: "Explain move constructor and move semantics (C++11).", meta: {year: "2022(ND)", marks: 8}}
                        ]
                    },
                    "5.13": {
                        name: "Smart Pointers (C++11)",
                        priority: "low",
                        questions: [
                            {id: "Q5.13.1", text: "Explain smart pointers in C++: unique_ptr, shared_ptr, weak_ptr.", meta: {year: "2024(AM)", marks: 8}},
                            {id: "Q5.13.2", text: "Why are smart pointers better than raw pointers?", meta: {year: "2023(ND)", marks: 4}},
                            {id: "Q5.13.3", text: "Write C++ programs using smart pointers.", meta: {year: "2024(ND)", marks: 8}}
                        ]
                    }
                }
            }
        };
