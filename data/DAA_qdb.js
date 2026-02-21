const questionDatabase = {
            unit1: {
                name: "Algorithms & Complexity Analysis",
                subtopics: {
                    "1.1": {
                        name: "Asymptotic Notations",
                        questions: [
                            {
                                id: "Q1.01",
                                text: "Define different asymptomatic notations with examples.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.02",
                                text: "What do you mean by an Algorithm? Write the characteristics of the algorithm in brief.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.03",
                                text: "Explain the different types of asymptotic notations with suitable graphs.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.04",
                                text: "What do you mean by time complexity of an algorithm?",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.05",
                                text: "What is asymptotic notation? Explain it's different types.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.06",
                                text: "What do you mean by Asymptotic Notations? Also write types of notations.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.07",
                                text: "What is Big O notation?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.08",
                                text: "What is Algorithm? Write its criteria and distinct area?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.09",
                                text: "What are asymptotic notations? Explain different types of Asymptotic notations.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.10",
                                text: "What are the fundamental steps involved in problem solving using algorithm.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.11",
                                text: "Explain the Asymptotic notations used in designing algorithms.",
                                frequency: 2,
                                marks: 8,
                                years: ["2021", "2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.2": {
                        name: "Master Method & Recurrence",
                        questions: [
                            {
                                id: "Q1.12",
                                text: "Using master method find the solution of the recurrence equations: (i) T(n)=9T(n/3)+n (ii) T(n)=T(2n/3)+1",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.13",
                                text: "What is a recursion tree? Using recursion tree find the asymptotic bound for the equation: T(n) = 3T(âŒŠn/4âŒ‹) + Î˜(nÂ²)",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.14",
                                text: "State the Master theorem in detail with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.15",
                                text: "Explain Substitution method with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.16",
                                text: "Consider the following functions and solve them using Master's theorem: (i) T(n) = 4T(n/2) + n (ii) T(n) = 2T(n/2) + n",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.17",
                                text: "State the master theorem and explain it with examples.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.18",
                                text: "Solve the following recursion equation by using master method: (i) T(n) = 3T(n/2) + nÂ² (ii) T(n) = 2T(n/2) + n log n",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.19",
                                text: "Solve the following Recurrence by Master Method: (i) T(n) = 4T(n/2) + nÂ³ (ii) T(n) = 32T(n/2) + nâµ (iii) T(n) = 9T(n/3) + n",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.20",
                                text: "Solve the following recurrences: (i) T(n)=T(n/2)+T(n/4)+T(n/8)+n (ii) T(n) = T(n-2) + 2 lg n",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.21",
                                text: "Explain master method and solve the following using master slave method: (i) T(n)=3T(n/2)+nÂ² (ii) T(n) = 2T(n/2)+nlogn (iii) T(n)= âˆš2T(n/2)+logn",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.3": {
                        name: "Sorting Algorithms",
                        questions: [
                            {
                                id: "Q1.22",
                                text: "Write an algorithm for selection sort and find its time complexity.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.23",
                                text: "What do you mean by sorting. Explain Heap Sort with an algorithm in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.24",
                                text: "Illustrate the operation of insertion sorting and define the complexity for worst case.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.25",
                                text: "Illustrate the following array elements and re-arrange them in ascending order using Insertion Sort: 16, 15, 4, 13, 2, 1",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.26",
                                text: "Explain heap sort algorithm with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.27",
                                text: "Write the algorithm of Insertion Sort and analyze this.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.28",
                                text: "Write the algorithm of Bubble sort and analyze it.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "medium"
                            }
                        ]
                    },
                    "1.4": {
                        name: "Searching Algorithms",
                        questions: [
                            {
                                id: "Q1.29",
                                text: "Consider the following array elements and find the location of key element from the array, where key element = 20: 10, 50, 30, 70, 80, 60, 20, 90, 40 using binary search algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            }
                        ]
                    }
                },
            },
            unit2: {
                name: "Divide & Conquer, Greedy",
                subtopics: {
                    "2.1": {
                        name: "Divide and Conquer",
                        questions: [
                            {
                                id: "Q2.01",
                                text: "Explain the difference between Divide & conquer paradigm and greedy method.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.02",
                                text: "What do you mean by greedy approach? Describe in brief.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.03",
                                text: "What is Divide and Conquer strategy?",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.04",
                                text: "Write difference between Kruskal & Prims algorithm.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.05",
                                text: "Discuss basic divide & conquer for matrix multiplication.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.06",
                                text: "Differentiate between divide and conquer algorithm and Greedy method.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.07",
                                text: "Explain divide and conquer approach for solving problems.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.08",
                                text: "Write the general plan for divide-and-conquer algorithms. Write any four example of divide-and-conquer.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            }
                        ]
                    },
                    "2.2": {
                        name: "Merge Sort & Quick Sort",
                        questions: [
                            {
                                id: "Q2.09",
                                text: "Write the detailed difference between quick sort and merge sort.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.10",
                                text: "Explain merge sort algorithm and apply it to sort <1,6,3,2,7,5,8,4>.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.11",
                                text: "Sort the following element using Merge Sort algorithm: 20, 30, 50, 10, 5, 60, 80, 8, 64, 75, 32, 69",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.12",
                                text: "Sort the following element using Quick Sort algorithm: 3, 4, 7, 1, 5, 9, 2, 8, 4",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.13",
                                text: "Explain & analyse merge sort algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.14",
                                text: "Sort the following elements using radix sort: 170, 45, 75, 90, 802, 24, 2, 66",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.15",
                                text: "Write the algorithm of Quick Sort and analyze it.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q2.16",
                                text: "Write the algorithm of Merge sort and analyze it.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.3": {
                        name: "Matrix Multiplication",
                        questions: [
                            {
                                id: "Q2.17",
                                text: "Explain Strassen's matrix multiplication and analyze the efficiency of the algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.18",
                                text: "Solve the following using divide and conquer algorithm for matrix multiplication.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "medium"
                            }
                        ]
                    },
                    "2.4": {
                        name: "Greedy Method - Knapsack",
                        questions: [
                            {
                                id: "Q2.19",
                                text: "Find an optimal solution to the fractional knapsack instances: n = 7, m = 15, Profit = {10, 5, 15, 7, 6, 18, 3}, Weight = {2, 3, 5, 7, 1, 4, 1}",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.20",
                                text: "Find the optimal solution for the fractional knapsack problem by making use of the greedy approach. Consider: n = 5, w = 60kg, (w1,w2,w3,w4,w5) = (5, 10, 15, 22, 25), (b1,b2,b3,b4,b5) = (30, 40, 45, 77, 90)",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.21",
                                text: "Explain Knapsack problem with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.22",
                                text: "Consider 5 items along their respective weights and values: I = < I1, I2, I3, I4, I5 >, W = < 5, 10, 20, 30, 40 >, V = < 30, 20, 100, 90, 160 >. The capacity of Knapsack W = 60. Find the solution to the fractional Knapsack problem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.23",
                                text: "Solve the Knapsack problem using Greedy algorithm, for the following data: Item A, B, C, D with Profit 280, 100, 120, 120 and Weight 40, 10, 20, 24 where W = 60.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.5": {
                        name: "Minimum Spanning Tree",
                        questions: [
                            {
                                id: "Q2.24",
                                text: "Construct the minimum spanning tree (MST) for the given graph using Prim's and Kruskal's algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.25",
                                text: "What is the Spanning tree? Consider the following graph and find the Minimum spanning tree.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.26",
                                text: "What is minimum spanning tree? Give the prims algorithm for finding minimum spanning tree for the given undirected graph. Find the minimum spanning tree, their weight are attached with each edge.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.27",
                                text: "Solve the following by Kruskal algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.28",
                                text: "Explain in short Kruskal & prims algorithm with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.29",
                                text: "Find the minimal spanning Tree Using Prim's algorithm for following graph.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.30",
                                text: "Find the minimum spanning tree using Kruskal algorithm for the following graph.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q2.31",
                                text: "Find the minimal spanning tree using Prim's algorithm for following graph.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.6": {
                        name: "Huffman Coding",
                        questions: [
                            {
                                id: "Q2.32",
                                text: "Explain Huffmann algorithm with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "medium"
                            }
                        ]
                    }
                },
            },
            unit3: {
                name: "Dynamic Programming & String Matching",
                subtopics: {
                    "3.1": {
                        name: "Dynamic Programming Concepts",
                        questions: [
                            {
                                id: "Q3.01",
                                text: "What is dynamic programming concept? Give an example.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.02",
                                text: "What do you mean by dynamic programming? Explain in brief.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.03",
                                text: "Classify the steps used for development of dynamic programming.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.04",
                                text: "What is dynamic programming?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.05",
                                text: "Explain Dynamic Programming.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.06",
                                text: "What is Dynamic programming? Write the steps of Dynamic Programming.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.2": {
                        name: "Matrix Chain Multiplication",
                        questions: [
                            {
                                id: "Q3.07",
                                text: "Find an optimal paranthesization of a matrix chain product whose sequence of dimensions is <5, 10, 3, 12, 5, 50, 6>.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.08",
                                text: "Write short notes on: (i) Matrix Chain multiplication. (ii) String matching algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.09",
                                text: "For the given sequence {4, 10, 3, 12, 20 and 7}. The matrices have size 4x10, 10x3, 3x12, 12x20, 20x7. Find out optimal matrix chain multiplication sequence dynamic programming.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.10",
                                text: "Explain the following by using Matrix chain multiplication: {4, 10, 3, 12, 20, 7}.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.11",
                                text: "Give the matrix having {4, 10, 3, 12, 20 and 7}, size 4x10, 10x3, 3x12, 12x20, 20x7 so compute the optimal solution using Matrix Chain multiplication.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.3": {
                        name: "Longest Common Subsequence",
                        questions: [
                            {
                                id: "Q3.12",
                                text: "Write short notes on: (i) Longest common subsequence problems (ii) Finite Automata for string matching problem",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.13",
                                text: "Write down the algorithm for finding longest common subsequence and obtain the LCS for X = {B,A,C,D,B}, Y = {B,D,C,B}",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.14",
                                text: "Using Dynamic Programming to find the LCS two sequences are: X: ACADB, Y: CBDA",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.15",
                                text: "Find Longest Common subsequence of X and Y, where X = A, B, C, B, D, A, B and Y = B, D, C, A, B, A.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q3.16",
                                text: "Given two sequences X[1.........m] and Y[1........n]. Find the longest common sequence to both: X: A B C B D C B, Y: B D C A B A",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.4": {
                        name: "KMP Algorithm",
                        questions: [
                            {
                                id: "Q3.17",
                                text: "Explain Knuth Morris and Pratt (KMP) algorithm with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.18",
                                text: "Explain Knuth Morris and Pratt algorithms in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.19",
                                text: "Discuss KMP algorithm and compute the following: T:ababcabcabababd, P:ababd",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.20",
                                text: "Write short note on Knuth Morris and Pratt algorithms.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.21",
                                text: "Explain Knuth Morris and Pratt algorithms.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.5": {
                        name: "Boyer-Moore Algorithm",
                        questions: [
                            {
                                id: "Q3.22",
                                text: "Explain Boyer Moore algorithm. Apply it to search for the pattern in the text given below: T(0-9): a b a c a a b a c c, P(0-5): a b a c a b",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.23",
                                text: "Explain Boyer-Moore Algorithm in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.24",
                                text: "Explain Boyer-Moore Algorithm with an example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.25",
                                text: "Discuss Boyer Moore pattern searching algorithm and compute the following: T: This is a test, P: test",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.26",
                                text: "Explain Boyer-Moore algorithm with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.27",
                                text: "Explain Boyer-Moore algorithm with its complexity.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.28",
                                text: "Find the pattern in the given text by using Boyer Moore algorithm, where Text: 'GCAATGCCTATGTGACC' and Pattern: 'TATGTG'.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q3.29",
                                text: "Explain Boyer Moore algorithm with its complexity. Also shows the complexity comparison of string matching algorithm.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.6": {
                        name: "String Matching - General",
                        questions: [
                            {
                                id: "Q3.30",
                                text: "Write any one application of string matching algorithm. Which string matching algorithm you will use for this? How you will think that your selected algorithm is better than other string matching algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "low"
                            }
                        ]
                    }
                },
            },
            unit4: {
                name: "Backtracking",
                subtopics: {
                    "4.1": {
                        name: "Backtracking Concepts",
                        questions: [
                            {
                                id: "Q4.01",
                                text: "What is backtracking and recursive backtracking?",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.02",
                                text: "Explain backtraking and recursive backtracking in brief.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.03",
                                text: "What is the meaning of backtracking in field of algorithm?",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.04",
                                text: "What do you understand by Backtracking in algorithm?",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.05",
                                text: "What is backtracking? Write any two application of backtracking.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.06",
                                text: "Explain Back tracking.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.07",
                                text: "Explain Backtracking and recursive backtracking.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.2": {
                        name: "8-Queens Problem",
                        questions: [
                            {
                                id: "Q4.08",
                                text: "Discuss the 8-queens problem with a suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.09",
                                text: "Solve the 8-queen problem using backtracking method.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.10",
                                text: "Find all the possible solution for 8 x 8 chess board, 8 Queen problem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.11",
                                text: "Explain 8-queens problem and solve it using backtrack technique.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.12",
                                text: "Write the rules of 8-queen problem. Find any one solution of 8-queen problem by using backtracking.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.3": {
                        name: "Hamiltonian Cycle",
                        questions: [
                            {
                                id: "Q4.13",
                                text: "What is a Hamiltonian cycle? How does one apply backtracking algorithm to find Hamiltonian path and cycle? Explain.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.14",
                                text: "Explain the Hamiltonian cycle in detail with a suitable diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.15",
                                text: "Design a back tracking algorithm for the Hamiltonian Cycle.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.16",
                                text: "Form a Hamiltonian cycle/circuit from the given undirected graph.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.17",
                                text: "Design a back tracking algorithm for Hamiltonian cycle problem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.18",
                                text: "Find the Hamiltonian cycle for the given graph using backtracking.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q4.19",
                                text: "Explain Hamilton cycle with an example.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.4": {
                        name: "Sum of Subsets",
                        questions: [
                            {
                                id: "Q4.20",
                                text: "Write an algorithm for sum of subsets. Solve the following problem: M = 30, W = {5, 10, 12, 13, 15, 18}.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.21",
                                text: "Consider the following Set S = {1, 3, 4, 5} and sum = 5. Find the subset(s).",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.22",
                                text: "Write short notes on: (i) Sum of subset (ii) Graph coloring",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.23",
                                text: "Given a set S = {5, 10, 12, 13, 15, 18} and d = 30 obtain the subset sum using backtrack approach.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.24",
                                text: "Find the solution for the sum of subsets problem with the set S = {3, 4, 5, 6, 10} with M = 9 using backtracking method.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.5": {
                        name: "Graph Coloring",
                        questions: [
                            {
                                id: "Q4.25",
                                text: "What is chromatic number? Give the state space tree for 4-coloring problem. Explain graph coloring problem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.26",
                                text: "Explain graph coloring in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.27",
                                text: "Color the following undirected graph, using Graph Coloring concept where chromatic no. is 3.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.28",
                                text: "Explain Graph Colorings method with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.29",
                                text: "What is Graph colouring method? Explain with an example.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "medium"
                            }
                        ]
                    },
                    "4.6": {
                        name: "Knapsack - Backtracking",
                        questions: [
                            {
                                id: "Q4.30",
                                text: "What is knapsack problem? Let us consider that the capacity of the knapsack w = 60 and the list of provided items: Item A,B,C,D with Profit 280, 100, 120, 120 and Weight 40, 10, 20, 24. What is the optimal solution and maximum profit?",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.31",
                                text: "Explain Knapsack problem.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit5: {
                name: "Branch & Bound, NP-Complete",
                subtopics: {
                    "5.1": {
                        name: "NP-Complete Concepts",
                        questions: [
                            {
                                id: "Q5.01",
                                text: "Differentiate between P and NP problems.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.02",
                                text: "State Cook's theorem in brief.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.03",
                                text: "What is least-cost search?",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.04",
                                text: "Define FIFO and LC (Least-Cost) search.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.05",
                                text: "What do you mean by LC (Least Cost) search?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.06",
                                text: "Explain NP-Hard and NP complete problems.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.07",
                                text: "Define Branch-and-Bound method with different types of nodes used.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            }
                        ]
                    },
                    "5.2": {
                        name: "Branch and Bound Methods",
                        questions: [
                            {
                                id: "Q5.08",
                                text: "Explain the use of branch and bound method to solve 15 puzzle problem with least cost search.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.09",
                                text: "What do you mean by NP-Hard problem? Explain at least one NP-hard problem in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.10",
                                text: "Explain Least-Cost Search with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.11",
                                text: "Write the difference between NP-Hard and NP-Complete classes in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.12",
                                text: "Explain FIFO branch & bound.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.13",
                                text: "Write short notes on: (i) NP-completeness (ii) Cook's theorem",
                                frequency: 2,
                                marks: 8,
                                years: ["2024(AM)", "2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.14",
                                text: "Analyze NP-hard and NP-completeness with an example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.15",
                                text: "Write short notes on the following: (i) P-Class (ii) NP-Class (iii) NP-Hard (iv) NP-Complete",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.16",
                                text: "Explain Cook's theorem in details.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.17",
                                text: "Explain 15 puzzle problem with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.18",
                                text: "Explain travelling sales person problem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.19",
                                text: "Explain FIFO branch and bound technique.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.20",
                                text: "Explain Cook's theorem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.21",
                                text: "Explain FIFO Branch and Bound and LC Branch and Bound, with example.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.22",
                                text: "Write short note on: (i) NP Complete Classes (ii) FIFO Branch and Bound",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "medium"
                            }
                        ]
                    },
                    "5.3": {
                        name: "0/1 Knapsack - Branch & Bound",
                        questions: [
                            {
                                id: "Q5.23",
                                text: "Solve the 0/1 knapsack problem using Branch and Bound with following data: Items I1, I2, I3 with Weight 3, 4, 5 and Value 4, 5, 6 where W = 7.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q5.24",
                                text: "For the given set of items and knapsack capacity = 5 kg, find the optimal solution for the 0/1 knapsack problem making use of dynamic programming approach: Item 1,2,3,4 with Weight 2,3,4,5 and Value 3,4,5,6",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.4": {
                        name: "Travelling Salesman Problem",
                        questions: [
                            {
                                id: "Q5.25",
                                text: "Define the traveling salesman problem. Illustrate the steps to solve the TSP given below.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.26",
                                text: "State and prove the cooks theorem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(AM)"],
                                priority: "low"
                            },
                            {
                                id: "Q5.27",
                                text: "Consider the following values/distances of the city, find the optimal solution for the travelling salesman problem.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.28",
                                text: "Explain TSP with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.29",
                                text: "Explain travelling sales person problem with an example.",
                                frequency: 1,
                                marks: 10,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.5": {
                        name: "Cook's Theorem",
                        questions: [
                            {
                                id: "Q5.30",
                                text: "Write short notes on any two: (i) Cook's theorem (ii) NP Complete Classes (iii) NP Hard Classes",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "medium"
                            }
                        ]
                    }
                },
            }
        };
