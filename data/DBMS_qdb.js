const questionDatabase = {
            unit1: {
                name: "Database System Architecture",
                subtopics: {
                    "1.1": {
                        name: "DBMS Architecture & Data Models",
                        questions: [
                            {
                                id: "Q1.01",
                                text: "Define RDBMS.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.02",
                                text: "Explain ANSI/SPARC 3 level architecture of DBMS.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.03",
                                text: "What are the various type of data model? Explain brief.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.04",
                                text: "Explain different type of data models.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.05",
                                text: "Explain DBMS system structure and its components.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.06",
                                text: "Explain the purpose of database systems. Differentiate DBMS versus file system.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.07",
                                text: "Discuss three levels architecture in DBMS.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.08",
                                text: "Enumerate the different types of data models existing for structured data storage.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.09",
                                text: "What is Data Independence? Why is it essential?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.10",
                                text: "Define data independence.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q1.11",
                                text: "Explain the architecture of DBMS with the help of a diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.2": {
                        name: "Data Definition & Manipulation Languages",
                        questions: [
                            {
                                id: "Q1.12",
                                text: "Explain Procedural and Non procedural DML in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.13",
                                text: "Write short notes on: (i) DDL (ii) DML",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.3": {
                        name: "Entity-Relationship Model",
                        questions: [
                            {
                                id: "Q1.14",
                                text: "Consider library maintains data about books. It is define as. (i) Entity book with attributes year title, price and ISBN. (ii) Entity author with attributes name, address, email. (iii) Construct E-R diagram showing relation between book and author and between book publisher",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.15",
                                text: "Discuss in detail about the concepts of E-R model with suitable examples.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.16",
                                text: "Explain terminology used in entity relationship model with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.4": {
                        name: "Relational Model & Keys",
                        questions: [
                            {
                                id: "Q1.17",
                                text: "Explain different types of Key in relational model with examples.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.18",
                                text: "Write about Relational Model. Also explain the concept of keys with the help of suitable example.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.19",
                                text: "Define Relation.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit2: {
                name: "Relational Query Languages",
                subtopics: {
                    "2.1": {
                        name: "Relational Algebra",
                        questions: [
                            {
                                id: "Q2.01",
                                text: "Define SQL.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.02",
                                text: "Define Relational Algebra. What are the operation in relational algebra?",
                                frequency: 2,
                                marks: 8,
                                years: ["2024(AM)", "2022"],
                                priority: "high"
                            },
                            {
                                id: "Q2.03",
                                text: "Explain join operators used in Relational Algebra.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.04",
                                text: "Explain the following functions (i) Select operation (ii) Project Operations (iii) Union (iv) Intersection (v) Rename",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.05",
                                text: "List relational algebra operators with examples.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.2": {
                        name: "Relational Calculus & SQL",
                        questions: [
                            {
                                id: "Q2.06",
                                text: "Explain tuple relation calculus and domain relation calculus?",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.07",
                                text: "Describe tuple â€” relational calculus and domain relational calculus with various example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q2.08",
                                text: "Consider the relational database employee(person-name, street, city) works(person-name,company-name, salary) company(company-name, city) managers(person-name,manager-name). Give an expression in the relational algebra for each request: (i) Modify the database so that Jones now lives in Newtown. (ii) Give all employees of First Bank Corporation a 10 percent salary raise. (iii) Give all managers in this database a 10 percent salary raise. (iv) Give all managers in this database a 10 percent salary raise, unless the salary would be greater than $100,000. In such cases, give only a 3 percent raise. (v) Delete all tuples in the works relation for employees of Small Bank Corporation.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.09",
                                text: "Implement following relation using SQL query student (stud no, stud name, sub 1, sub 2 totalmark, percentage) Create the table, add 5 records and display the data.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.10",
                                text: "Explain the difference between open source database and commercial database.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "medium"
                            }
                        ]
                    },
                    "2.3": {
                        name: "Functional Dependencies & Normalization",
                        questions: [
                            {
                                id: "Q2.11",
                                text: "What are the different types of functional dependencies? Consider the following set of FD's: AB -> C, A -> DE, B -> F, F -> GH, D -> IJ. Find: (i) super key (ii) irreducible set (iii) candidate key",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.12",
                                text: "Explain Armstrong's rule for functional dependencies with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.13",
                                text: "Explain Normalization with examples.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.14",
                                text: "Define Normalization. Explain 3NF and BCNF.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.15",
                                text: "Explain BCNF (Boyce Codd Normal Form) with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q2.16",
                                text: "What is normalization? Explain the process of relation refinement with the help of normalization by taking suitable example. (You may go up to 3 NF)",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit3: {
                name: "Query Processing & Optimization",
                subtopics: {
                    "3.1": {
                        name: "Query Processing",
                        questions: [
                            {
                                id: "Q3.01",
                                text: "Define Query processing.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.02",
                                text: "Explain the steps in query processing by giving appropriate example.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.03",
                                text: "Explain basic steps of query processing with neat diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q3.04",
                                text: "Define Query equivalence.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q3.05",
                                text: "What is Query equivalence in DBMS?",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.06",
                                text: "Does the data dictionary have any role to play in query processing? Describe with the help of an SQL query requiring JOIN operation, selection and projection.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.2": {
                        name: "Query Optimization",
                        questions: [
                            {
                                id: "Q3.07",
                                text: "Explain Query optimization. Explain the structure of query optimizer.",
                                frequency: 3,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)", "2022"],
                                priority: "high"
                            },
                            {
                                id: "Q3.08",
                                text: "What is evaluation plan and equivalence rules in Query optimization.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.09",
                                text: "How does a query tree represent a relational algebra expression? Discuss any three rules for query optimization, giving example as to when should each rule be applied.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.10",
                                text: "What is meant by heuristic optimization? Discuss the main heuristics that are applied during query optimization.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.3": {
                        name: "Storage Strategies & Join Operations",
                        questions: [
                            {
                                id: "Q3.11",
                                text: "Explain different approaches of storage strategies in detail.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.12",
                                text: "How to evaluate relational algebra expressions in DBMS.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.13",
                                text: "Join strategies with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.4": {
                        name: "Indexing - B-Trees & Hashing",
                        questions: [
                            {
                                id: "Q3.14",
                                text: "Explain indices and B-tree.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.15",
                                text: "Write notes on: (any two) (i) Indices (ii) B-Trees (iii) Hashing",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.16",
                                text: "Write short notes on: (i) Indices (ii) Hashing",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit4: {
                name: "Transaction Processing",
                subtopics: {
                    "4.1": {
                        name: "ACID Properties & Transactions",
                        questions: [
                            {
                                id: "Q4.01",
                                text: "Define database recovery.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.02",
                                text: "Describe ACID properties of transaction.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.03",
                                text: "Define Transaction. Write ACID properties of Transaction.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.04",
                                text: "What is Transaction? List the properties of transaction.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q4.05",
                                text: "What are the ACID properties?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.2": {
                        name: "Serializability",
                        questions: [
                            {
                                id: "Q4.06",
                                text: "Give the significance of serializabilitiy in database transaction. How view serializability is different from conflict serializability.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.07",
                                text: "How the view and conflict serializability support the execution of concurrent transaction? Explain with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.08",
                                text: "What are Concurrent Schedules? Write in detail about serializability.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.09",
                                text: "What do you understand by Serializability? Explain the concept of conflicts serializability and view serializibility with examples.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q4.10",
                                text: "What do you understand by serializability of schedules? Explain it.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.3": {
                        name: "Concurrency Control - Locking",
                        questions: [
                            {
                                id: "Q4.11",
                                text: "What is lock compatibility matrix? Explain with an example the concurrency control techniques for scheduling database transactions.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.12",
                                text: "List all the locking techniques for concurrency control over real time transaction.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.13",
                                text: "What is concurrency control mechanism? Explain Multi-version and Concurrency Control scheme.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.14",
                                text: "Explain concurrency control mechanism.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.4": {
                        name: "Timestamp-Based Concurrency Control",
                        questions: [
                            {
                                id: "Q4.15",
                                text: "Discuss the time stamp ordering protocol for concurrency control. How does strict time stamp ordering differ from basic time stamp ordering.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.16",
                                text: "What is Time Stamp?",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q4.17",
                                text: "Explain in detail about timestamp based concurrency control techniques.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.5": {
                        name: "Database Recovery",
                        questions: [
                            {
                                id: "Q4.18",
                                text: "What is database recovery? Explain shadow paging in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit5: {
                name: "Database Security & Advanced Topics",
                subtopics: {
                    "5.1": {
                        name: "Authentication & Authorization",
                        questions: [
                            {
                                id: "Q5.01",
                                text: "Define DAC.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.02",
                                text: "Define Authentication.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.03",
                                text: "What are the three pillars of security? Explain DAC, MAC and RBAC.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.04",
                                text: "Write short notes on: (i) Intrusion detection techniques in database (ii) Authorization, Authentication and access control in database",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.05",
                                text: "What are the various ways in which a database can be secured?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.2": {
                        name: "Access Control Models",
                        questions: [
                            {
                                id: "Q5.06",
                                text: "What is role based access control?",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.07",
                                text: "Describe MAC and RBAC models in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.08",
                                text: "What are the four main access control model?",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.3": {
                        name: "SQL Injection & Intrusion Detection",
                        questions: [
                            {
                                id: "Q5.09",
                                text: "What is SQL Injection? How SQL Injection works and its defense mechanism?",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.4": {
                        name: "Object-Oriented & Object-Relational Databases",
                        questions: [
                            {
                                id: "Q5.10",
                                text: "Differences between object oriented and object relational database.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.11",
                                text: "What is logical and web database? Differentiate between object oriented and object relational database.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.12",
                                text: "What are the difference between RDBMS and OODBMS?",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.5": {
                        name: "Data Warehousing & Data Mining",
                        questions: [
                            {
                                id: "Q5.13",
                                text: "Explain the architecture of knowledge discovery using data warehousing and mining.",
                                frequency: 2,
                                marks: 10,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.14",
                                text: "Write short notes on: (any two) (i) MAC (ii) Datawarehousing and data mining (iii) Web mining",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.15",
                                text: "Explain data warehousing with suitable diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.16",
                                text: "What is Data Mining? Explain Data Mining Techniques. Compare between Data Mining and Data Warehousing.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.6": {
                        name: "Distributed & Web Databases",
                        questions: [
                            {
                                id: "Q5.17",
                                text: "Write notes on: (any two) (i) Web databases (ii) Distributed databases (iii) Data warehousing and data mining",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.18",
                                text: "Write short notes on: (i) Distributed databases (ii) Web databases",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    }
                },
            }
        };
