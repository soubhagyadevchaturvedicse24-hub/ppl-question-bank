const questionDatabase = {
    unit1: {
        name: "INTRODUCTION & FUNDAMENTALS OF JAVA",
        subtopics: {
            "1.1": {
                name: "Java Architecture & Platform Independence",
                questions: [
                    {
                        id: "Q1.1",
                        text: "Describe java architecture.",
                        frequency: 1,
                        marks: 4,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q1.9",
                        text: "How Java is platform independent?",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q1.11",
                        text: "Java is not 100% object oriented language. Comment with suitable example.",
                        frequency: 2,
                        marks: 8,
                        years: ["2024(AM)", "2021"],
                        priority: "high"
                    },
                    {
                        id: "Q1.16",
                        text: "What is Java Machine? Explain its architecture.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q1.19",
                        text: "Explain the features of Java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    },
                    {
                        id: "Q1.23",
                        text: "What is JVM? Also explain the role of Garbage Collector with suitable program.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    },
                    {
                        id: "Q1.8",
                        text: "Explain the following: (a) JAVA Architecture (b) JAVA fundamental and background",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    }
                ]
            },
            "1.2": {
                name: "Java Syntax & Statements",
                questions: [
                    {
                        id: "Q1.2",
                        text: "Define java token. Explain various statements defined in java with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.4",
                        text: "How to take reading from console inputs. Explain with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.10",
                        text: "How do you set up the environment in java?",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "1.3": {
                name: "Variables & Data Types",
                questions: [
                    {
                        id: "Q1.3",
                        text: "Explain Local, Instance and static variable with suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q1.5",
                        text: "Describe the use of static member in JAVA.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q1.15",
                        text: "Explain static members in java with proper example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q1.18",
                        text: "Explain static and this keyword with suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "1.4": {
                name: "Constructors",
                questions: [
                    {
                        id: "Q1.6",
                        text: "Define and describe the role of constructor and also explain copy constructor.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q1.12",
                        text: "Write a program to implement constructor in java?",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.14",
                        text: "Explain Constructors in Java with the help of example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q1.20",
                        text: "Define constructor. Explain types of constructor using example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    },
                    {
                        id: "Q1.22",
                        text: "Write a program taking input from user 1 to 3 and do the following: (i) If the input is 1 call the default constructor. (ii) If the input is 2 call the constructor with one integer parameter. (iii) If the input is 3 call the constructor with one string parameter.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "medium"
                    }
                ]
            },
            "1.5": {
                name: "This & Super Keywords",
                questions: [
                    {
                        id: "Q1.7",
                        text: "Why we use this method and reference? Explain with suitable JAVA program.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    }
                ]
            },
            "1.6": {
                name: "Java vs C++ Comparison",
                questions: [
                    {
                        id: "Q1.13",
                        text: "Give any 4 differences between C++ and Java.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q1.17",
                        text: "Compare Java and C++.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "1.7": {
                name: "Packages & Classes",
                questions: [
                    {
                        id: "Q1.21",
                        text: "Give the name of top class of all the classes in java and top package which is default package.",
                        frequency: 1,
                        marks: 4,
                        years: ["2021"],
                        priority: "medium"
                    }
                ]
            }
        }
    },
    unit2: {
        name: "CLASSES, INTERFACES & EXCEPTION HANDLING",
        subtopics: {
            "2.1": {
                name: "Classes & Objects",
                questions: [
                    {
                        id: "Q2.1",
                        text: "Describe Concrete class.",
                        frequency: 1,
                        marks: 4,
                        years: ["2025"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.5",
                        text: "Compare concrete and abstract class.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.9",
                        text: "What is singleton class in java?",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.16",
                        text: "Discuss about Singleton Class in Java using example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    }
                ]
            },
            "2.2": {
                name: "Inheritance & Super Keyword",
                questions: [
                    {
                        id: "Q2.7",
                        text: "Write JAVA program to explain super method and reference.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.21",
                        text: "Give uses of super in Java.",
                        frequency: 1,
                        marks: 4,
                        years: ["2021"],
                        priority: "high"
                    }
                ]
            },
            "2.3": {
                name: "Method Overloading & Overriding",
                questions: [
                    {
                        id: "Q2.8",
                        text: "Write JAVA program for: (i) Inner Class (ii) Method overloading",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.11",
                        text: "What is the difference between method overloading and overriding?",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.13",
                        text: "Write down any 4 differences between method overloading and overriding.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q2.20",
                        text: "Differentiate between method overloading and method overriding with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "2.4": {
                name: "Abstract Classes",
                questions: [
                    {
                        id: "Q2.12",
                        text: "What is abstract class? Write a program to implement abstract class in java?",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.15",
                        text: "Explain Abstract Class and Interface with suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    }
                ]
            },
            "2.5": {
                name: "Interfaces",
                questions: [
                    {
                        id: "Q2.4",
                        text: "Differentiate interface and abstract class.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q2.17",
                        text: "Differentiate between interface and abstract class.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022"],
                        priority: "high"
                    },
                    {
                        id: "Q2.22",
                        text: "Differentiate between Abstract class and Interface with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    }
                ]
            },
            "2.6": {
                name: "Packages",
                questions: [
                    {
                        id: "Q2.18",
                        text: "Write a Java Program to demonstrate how packages can be created, imported and used.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "medium"
                    }
                ]
            },
            "2.7": {
                name: "Exception Handling Basics",
                questions: [
                    {
                        id: "Q2.2",
                        text: "Explain checked and unchecked exceptions in Java and demonstrate them, using a Java program.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q2.3",
                        text: "Explain the use try, catch, throws and finally with proper example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q2.6",
                        text: "Explain the concept of exception handling with suitable JAVA program.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.10",
                        text: "Demonstrate arithmetic exception in Java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.14",
                        text: "Explain Exception-Handling in Java. Give one example for user defined exception.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q2.23",
                        text: "Find the output of the following code: public class test { public static void main (String [] args) { try { System.out.printf(\"1\"); int sum = 9/0; System.out.printf(\"2\"); } catch (ArithmeticException e) { System.out.printf(\"3\"); } catch (Exception e) { System.out.printf(\"4\"); } finally { System.out.printf(\"5\"); } } }",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.24",
                        text: "Write a program in Java to demonstrate user throw. Also explain checked and unchecked exception.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    }
                ]
            },
            "2.8": {
                name: "User-Defined Exceptions",
                questions: [
                    {
                        id: "Q2.19",
                        text: "Create a user defined exception class which throws exception when the user input marks greater than 100.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            }
        }
    },
    unit3: {
        name: "STRING, WRAPPER CLASSES & MULTI-THREADING",
        subtopics: {
            "3.1": {
                name: "String Classes",
                questions: [
                    {
                        id: "Q3.4",
                        text: "Differentiate between string and string builder. Briefly explain string class methods.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q3.8",
                        text: "Define and explain Wrapper class and string class with JAVA program.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.16",
                        text: "What is mutable and immutable in Java. Also explain string and string buffer class.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q3.17",
                        text: "Compare string and stringbuilder.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022"],
                        priority: "high"
                    },
                    {
                        id: "Q3.23",
                        text: "Explain string and string buffer class. What is mutable and immutable in java?",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    }
                ]
            },
            "3.2": {
                name: "Wrapper Classes",
                questions: [
                    {
                        id: "Q3.1",
                        text: "What are the different types of wrapper classes in Java?",
                        frequency: 1,
                        marks: 4,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q3.9",
                        text: "What is a wrapper class?",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "high"
                    }
                ]
            },
            "3.3": {
                name: "Multi-threading Basics",
                questions: [
                    {
                        id: "Q3.10",
                        text: "Write a program to create a thread using runnable interface.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.13",
                        text: "What is multithreading?",
                        frequency: 1,
                        marks: 4,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q3.18",
                        text: "Explain the life cycle of thread. In How many ways can a thread be created in Java? Explain with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    },
                    {
                        id: "Q3.22",
                        text: "Explain the concept of Lock in java. Also explain Thread Priority.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    },
                    {
                        id: "Q3.24",
                        text: "Explain Inter Thread Communication. What is Daemon Thread?",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    }
                ]
            },
            "3.4": {
                name: "Thread Synchronization",
                questions: [
                    {
                        id: "Q3.2",
                        text: "Explain thread synchronization with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q3.6",
                        text: "Describe Thread Synchronization and Thread class methods using suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.14",
                        text: "What is synchronization in Java? Explain using suitable examples.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q3.19",
                        text: "Define synchronization. Explain the use of synchronization method with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "3.5": {
                name: "File I/O Streams",
                questions: [
                    {
                        id: "Q3.3",
                        text: "Show the use of InputStream and OutputStream classes.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q3.5",
                        text: "Compare the use of Input Stream and Output Stream.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.7",
                        text: "Write a JAVA program to explain the concept of reading and writing data from/to disk.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.11",
                        text: "Write a program to demonstrate reading and writing to files in java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.12",
                        text: "Explain inputstream and outputstream in detail with suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.15",
                        text: "Explain following: (i) Reader Class (ii) Writer Class",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.20",
                        text: "Explain Byte streams and Character streams with suitable Java program.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "medium"
                    }
                ]
            },
            "3.6": {
                name: "Exception Classes",
                questions: [
                    {
                        id: "Q3.21",
                        text: "Which one is the master class of exceptions?",
                        frequency: 1,
                        marks: 4,
                        years: ["2021"],
                        priority: "medium"
                    }
                ]
            }
        }
    },
    unit4: {
        name: "AWT, SWING, APPLETS, JDBC & NETWORKING",
        subtopics: {
            "4.1": {
                name: "AWT Components",
                questions: [
                    {
                        id: "Q4.7",
                        text: "Explain different AWT and SWING tools with suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q4.13",
                        text: "Explain AWT in Java.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.17",
                        text: "Write the differences between Swing and AWT components.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "4.2": {
                name: "Layout Managers",
                questions: [
                    {
                        id: "Q4.4",
                        text: "Explain layout manager. Also give example of any one layout.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "medium"
                    }
                ]
            },
            "4.3": {
                name: "Event Handling",
                questions: [
                    {
                        id: "Q4.3",
                        text: "Explain Event Delegation Model in Java with suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q4.8",
                        text: "Explain the following: (i) Type I to Type 4 drivers (ii) Action Listener and Container Listener",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q4.12",
                        text: "Explain the following in nutshell: i. ActionListener ii. ContainerListener iii. FocusListener iv. ItemListener",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.19",
                        text: "Explain Event delegation model in Java with suitable example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "4.4": {
                name: "SWING Components",
                questions: [
                    {
                        id: "Q4.10",
                        text: "Write a program in java to create user form?",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "4.5": {
                name: "Applets",
                questions: [
                    {
                        id: "Q4.5",
                        text: "Define and describe Applet.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.9",
                        text: "Explain applet tag with all its attribute in detail.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.14",
                        text: "Explain the life cycle of Applet using figure.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q4.22",
                        text: "Write a program to add 2 numbers using Applet.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "medium"
                    }
                ]
            },
            "4.6": {
                name: "JDBC Drivers",
                questions: [
                    {
                        id: "Q4.2",
                        text: "What is JDBC? Explain the types of Drivers in JDBC.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q4.15",
                        text: "Explain JDBC drivers available in Java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    },
                    {
                        id: "Q4.20",
                        text: "What is JDBC? Explain the types of JDBC.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    },
                    {
                        id: "Q4.23",
                        text: "Explain all types of JDBC Bridge drivers.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    }
                ]
            },
            "4.7": {
                name: "Networking Basics",
                questions: [
                    {
                        id: "Q4.1",
                        text: "What is RMI?",
                        frequency: 1,
                        marks: 4,
                        years: ["2025"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.11",
                        text: "Define sockets. Write a program to demonstrate simple TCP client-server interaction.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q4.16",
                        text: "Explain Server Socket with the help of example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.18",
                        text: "Write a Java Program to see the port number, protocol name of given URL.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.21",
                        text: "What is the functioning of whois?",
                        frequency: 1,
                        marks: 4,
                        years: ["2021"],
                        priority: "low"
                    },
                    {
                        id: "Q4.24",
                        text: "Write a program using internet address class and show the utility of URL and URL connection classes.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "medium"
                    }
                ]
            },
            "4.8": {
                name: "Server Socket",
                questions: [
                    {
                        id: "Q4.6",
                        text: "Write a JAVA program to explain Server Socket.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    }
                ]
            }
        }
    },
    unit5: {
        name: "COLLECTIONS FRAMEWORK & GENERICS",
        subtopics: {
            "5.1": {
                name: "Collections Framework Basics",
                questions: [
                    {
                        id: "Q5.7",
                        text: "Explain the collection framework with suitable examples.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.13",
                        text: "What do you understand by Java Collection Framework?",
                        frequency: 1,
                        marks: 4,
                        years: ["2023"],
                        priority: "high"
                    }
                ]
            },
            "5.2": {
                name: "List Implementations",
                questions: [
                    {
                        id: "Q5.1",
                        text: "Describe Array list with example.",
                        frequency: 1,
                        marks: 4,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q5.2",
                        text: "What is Linkedlist? Give difference between Arraylist and Linkedlist?",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q5.12",
                        text: "Explain the following in nutshell: i. HashSet ii. TreeSet iii. ArrayList iv. LinkedList",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.14",
                        text: "Explain the following: (i) Array List (ii) Linked List",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "high"
                    }
                ]
            },
            "5.3": {
                name: "Set Implementations",
                questions: [
                    {
                        id: "Q5.5",
                        text: "Write the use of Hashset and Hashtable class.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.17",
                        text: "Define Hashset and TreeSet.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "5.4": {
                name: "Map Implementations",
                questions: [
                    {
                        id: "Q5.10",
                        text: "Differentiate between HashMap and Hashtable.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.15",
                        text: "How do you get all the keys present in a Hash Map?",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.19",
                        text: "Write a program using the concept of HashMap.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.20",
                        text: "Explain Hashtable classes in java with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.23",
                        text: "How do you retrieve all keys present in a Hash Map?",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "medium"
                    }
                ]
            },
            "5.5": {
                name: "Generics",
                questions: [
                    {
                        id: "Q5.4",
                        text: "Explain Generics class in Java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "high"
                    },
                    {
                        id: "Q5.8",
                        text: "Explain with code the concept of Generic classes & methods.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.9",
                        text: "What are generic classes? What is the purpose of generic classes in java?",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.18",
                        text: "Explain generic using classes and generic types in Java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022"],
                        priority: "high"
                    }
                ]
            },
            "5.6": {
                name: "JAR Files",
                questions: [
                    {
                        id: "Q5.3",
                        text: "What are the steps to creating and running executable JAR?",
                        frequency: 1,
                        marks: 8,
                        years: ["2025"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.6",
                        text: "Write JAVA program to create and execute JAVA Archives.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.11",
                        text: "What is JAR file? How to create and execute JAR file in Java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.24",
                        text: "Write the steps of creating and running executable JAR files in java.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "medium"
                    }
                ]
            },
            "5.7": {
                name: "Event Delegation Model",
                questions: [
                    {
                        id: "Q5.16",
                        text: "Explain Event Delegation Model (EDM).",
                        frequency: 1,
                        marks: 8,
                        years: ["2023"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.21",
                        text: "What is AWT?",
                        frequency: 1,
                        marks: 4,
                        years: ["2021"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.22",
                        text: "Explain Event Delegation Model.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021"],
                        priority: "high"
                    }
                ]
            }
        }
    }
};
