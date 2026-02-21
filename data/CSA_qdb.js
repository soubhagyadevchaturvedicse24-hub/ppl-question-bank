const questionDatabase = {
            unit1: {
                name: "Basic Structure of Computers",
                subtopics: {
                    "1.1": {
                        name: "Instruction Formats & Addressing Modes",
                        questions: [
                            {
                                id: "Q1.01",
                                text: "Explain the basic instruction format.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.02",
                                text: "What are the addressing modes? Explain with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.03",
                                text: "Describe various functional units of a computer.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.04",
                                text: "Explain various instruction formats with examples.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.05",
                                text: "What do you understand by addressing modes? Explain with suitable example.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.06",
                                text: "Explain register indirect mode.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.07",
                                text: "Evaluate the arithmetic statement X=(A+B)*(C+D) using three address instruction and two address instruction.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.08",
                                text: "What do you mean by micro program?",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.09",
                                text: "Explain various types of computer instruction formats.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q1.10",
                                text: "An instruction is stored at location 300 with its address field at location 301. The address field has the value 400, a processor register R1 contain the number 200. Evaluate effective address if the addressing mode of the instruction are (i) direct (ii) immediate (iii) relative (iv) register indirect",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.11",
                                text: "A two-word instruction is stored in memory at an address designated by symbol W. The address field of the instruction (stored at W+1) is designated by symbol Y. The operand used during the execution of the instruction is stored at an address symbolized by Z. An index register contains of the value X. State how Z is calculated from the other addresses if the addressing mode of the instruction is (i) Direct (ii) Indirect (iii) Relative (iv) Indexed",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.2": {
                        name: "Bus Architecture & Functional Units",
                        questions: [
                            {
                                id: "Q1.12",
                                text: "Explain the bus architecture with suitable diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "medium"
                            }
                        ]
                    },
                    "1.3": {
                        name: "Control Unit - Hardwired & Microprogrammed",
                        questions: [
                            {
                                id: "Q1.13",
                                text: "Write short notes on: (i) Hardwired Control (ii) Micro programmed Control",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.14",
                                text: "Write the differences between Hardwired and Micro programmed control unit. Draw the block diagram of both.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q1.15",
                                text: "Explain Hardwired control and Micro programmed control with neat diagram in detail. Also differentiate between Hardwired control and Micro programmed control.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.16",
                                text: "Differentiate between hardwired control unit and micro-programmed control unit.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q1.17",
                                text: "Explain the working of a typical hardwired control unit with a neat diagram?",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q1.18",
                                text: "What is the format of microinstruction in computer architecture?",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.19",
                                text: "Explain microinstruction format and its field in detail.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "medium"
                            }
                        ]
                    },
                    "1.4": {
                        name: "Instruction Cycle & Sequencing",
                        questions: [
                            {
                                id: "Q1.20",
                                text: "Explain Instruction Cycle with diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit2: {
                name: "Arithmetic Operations",
                subtopics: {
                    "2.1": {
                        name: "Number Representations",
                        questions: [
                            {
                                id: "Q2.01",
                                text: "Define arithmetic overflow.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.02",
                                text: "Define overflow and underflow.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.03",
                                text: "Defined Signed number.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.04",
                                text: "In a computer with 48-bit words, one bit is reserved for the sign. What will be the range of fixed-point integer number?",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.05",
                                text: "Describe a technique used to make the process of addition and subtraction by 2's complement number faster.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.06",
                                text: "Write short notes on: (i) Addition and subtraction of signed magnitude data (ii) Floating point operations with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.07",
                                text: "Explain Number representation with its types and operations in detail.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.08",
                                text: "Explain the addition and subtraction of two fixed point signed magnitude data with overflow.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.2": {
                        name: "Multiplication - Booth's Algorithm",
                        questions: [
                            {
                                id: "Q2.09",
                                text: "Explain Booth multiplication along with 2's complement number using flow diagram and example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.10",
                                text: "Explain Booth's algorithm in detail. Multiply the two numbers 23 and -9 by using the Booth's multiplication algorithm.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.11",
                                text: "Explain Booth multiplication along with for 2's complement number using flow chart and example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q2.12",
                                text: "Show step-by-step multiplication process using Booth Algorithm. Assume 5 bit registers that hold signed numbers are (+15) x (-13).",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q2.13",
                                text: "Multiply (-5) and (4) using Booth's Algorithm (Register size = 4 bit).",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.14",
                                text: "Write short notes on: (i) Addition and subtraction of signed magnitude data (ii) Unsigned multiplication using Booth's algorithm with 2's complement number with the help of flow chart.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.3": {
                        name: "Bit-Pair Recoding",
                        questions: [
                            {
                                id: "Q2.15",
                                text: "Explain Bit-pair recoding with an example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.16",
                                text: "Explain Bit Pair Recoding and perform multiply (+13) and (-6) using bit pair recoding multiplier method.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.4": {
                        name: "Division Algorithms",
                        questions: [
                            {
                                id: "Q2.17",
                                text: "Explain integer division with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.18",
                                text: "Evaluate the following by using Restoring Division: Divisor is 11 and Divided is 1000.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q2.19",
                                text: "What is divide overflow? Give suitable example.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.20",
                                text: "Show the contents of registers E, A, Q and SC during the process of division of 10100011 by 1011 using restoring method.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q2.21",
                                text: "Explain Storing and Non-Restoring method of integer division in detail. Perform Division Restoring Algorithm. Dividend = 11 Divisor = 3",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.22",
                                text: "Explain Restoring division and divide 17 by 3 using restoring method.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.5": {
                        name: "Floating Point Operations",
                        questions: [
                            {
                                id: "Q2.23",
                                text: "Explain the floating point operations with example (consider guard bits).",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.24",
                                text: "Write short notes on: (i) Fast adders (ii) Booth multiplication algorithm with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "medium"
                            }
                        ]
                    }
                },
            },
            unit3: {
                name: "Memory System",
                subtopics: {
                    "3.1": {
                        name: "Memory Hierarchy",
                        questions: [
                            {
                                id: "Q3.01",
                                text: "Describe the memory types available in computer system.",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.02",
                                text: "Draw and explain memory hierarchy. Explain different types of memory with neat diagram.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.03",
                                text: "Explain the different memory level with diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.04",
                                text: "Write memory hierarchy with diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.2": {
                        name: "Cache Memory",
                        questions: [
                            {
                                id: "Q3.05",
                                text: "A CPU has a 12 bit address for memory addressing: (i) What is the memory address space capable of computer? (ii) If the memory has a total capacity of 16KB. What is the word length of the memory?",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.06",
                                text: "Define Cache Memory.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.07",
                                text: "What are the different types of mapping used in cache organization? Explain each in detail.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.08",
                                text: "Define the principle of locality of references. Which parameter is used to evaluate the performance of cache memory?",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.09",
                                text: "The access time of cache memory is 100 ns and that of main memory 1000 ns. It is estimated that 80% of the memory request for read and remaining for write. The hit ratio for read access only is 0.9. A write through procedure is used. (i) What is the average access time of system considering only memory read? (ii) What is the average access time of system for both read and write required?",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q3.10",
                                text: "A two-way set associative cache memory uses blocks of four words. The cache can accommodate a total of 2048 words from main memory. The main memory size is 128K x 32. (i) Formulate all pertinent information required to construct the cache memory. (ii) What is the size of cache memory?",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q3.11",
                                text: "The access time of cache memory is 100 ns and that of main memory is 1000 ns. It is estimate that 80 percent of the memory request are for read and remaining 20 percent for write the hit ratio for read access is 0.9. A write through procedure is used: (i) What is the average access time of the system considering only memory read cycle? (ii) What is the average access time of the system for both read and write cycles? (iii) What is the hit ratio taking into consideration the write cycles?",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q3.12",
                                text: "Write the concept of cache memory! How it is used to increase the speed of computer system?",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.13",
                                text: "The access time of a cache memory is 100 ns and that of main memory is 1000 ns. It is estimate that 80 percent of the memory request are for read and remaining 20 percent for write the hit ratio for read access is 0.9. A write through procedure is used: (i) What is the average access time of the system considering only memory read cycle? (ii) What is the average access time of the system for both read and write cycles? (iii) What is the hit ratio taking into consideration the write cycles?",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.14",
                                text: "A direct mapped cache of size 64 word, with block size 4 word, the size of main memory is 512 Byte. Find: (i) Physical address (ii) Block offset",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.3": {
                        name: "Virtual Memory",
                        questions: [
                            {
                                id: "Q3.15",
                                text: "Explain the working flow of virtual memory with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.16",
                                text: "What do you mean by virtual memory? An address space is specified by 24 bits and corresponding memory space by 16 bits. (i) How many word are there in the address space? (ii) How many word are there in the memory space? (iii) If a page consists of 2K words, how many pages and blocks are there in the system?",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q3.17",
                                text: "What is Virtual Memory?",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.18",
                                text: "Explain Virtual Memory in detail.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.4": {
                        name: "Associative Memory",
                        questions: [
                            {
                                id: "Q3.19",
                                text: "Explain the working of associative memory with block diagram and derive the expression for match logic.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.20",
                                text: "Explain the working of an associative memory with neat diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.21",
                                text: "Explain the different memory level with concept of Associative Memory.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "medium"
                            }
                        ]
                    },
                    "3.5": {
                        name: "Multi-Module & Interleaved Memory",
                        questions: [
                            {
                                id: "Q3.22",
                                text: "How many 128 byte RAM chips are required to provide a memory of 2048 bytes? Show details concerning address assignment and decoder.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.23",
                                text: "Explain Multi-module memories and interleaving with example.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q3.24",
                                text: "Write the advantages of memory interleaving?",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "low"
                            }
                        ]
                    }
                },
            },
            unit4: {
                name: "Input/Output Organization",
                subtopics: {
                    "4.1": {
                        name: "I/O Interfaces & Peripherals",
                        questions: [
                            {
                                id: "Q4.01",
                                text: "What are the peripheral devices?",
                                frequency: 1,
                                marks: 4,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.02",
                                text: "Define peripheral devices.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.03",
                                text: "What do you understand by computer peripherals? Explain with proper explanation any two computer peripherals.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.04",
                                text: "Explain in detail about the structure of a magnetic disk system. Also mention how we can find its capacity.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.05",
                                text: "Explain Peripheral devices.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "medium"
                            }
                        ]
                    },
                    "4.2": {
                        name: "I/O Mapped vs Memory Mapped I/O",
                        questions: [
                            {
                                id: "Q4.06",
                                text: "Differentiate between I/O mapped I/O and memory mapped I/O with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.07",
                                text: "Explain I/O mapped I/O and Memory mapped I/O in detail.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.08",
                                text: "Write down the difference between I/O mapped I/O and memory mapped I/O.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.3": {
                        name: "Interrupts",
                        questions: [
                            {
                                id: "Q4.09",
                                text: "Differentiate between synchronous and asynchronous data transfer.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.10",
                                text: "How Daisy Chaining priority interrupt works?",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.11",
                                text: "What is Interrupt? Explain different types of interrupt and interrupt handling mechanism in detail.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.12",
                                text: "What are priorit interrupts.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.13",
                                text: "Explain the working of Daisy chaining priority interrupt with diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.14",
                                text: "Difference between synchronous and asynchronous data transmission.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.15",
                                text: "What are Interrupt? Explain various types of interrupt.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.16",
                                text: "Differentiate between asynchronous and synchronous data transfer.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.4": {
                        name: "Direct Memory Access (DMA)",
                        questions: [
                            {
                                id: "Q4.17",
                                text: "What is DMA controller? What features it provides in the time of data transfer in different category of computer system?",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.18",
                                text: "Explain the direct memory access scheme alongwith its advantages for data transfer between external devices and the main memory.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q4.19",
                                text: "What is DMA? Explain the working of DMA with advantages and disadvantages.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.20",
                                text: "Explain the working of Direct Memory Access with a neat diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q4.21",
                                text: "Who controls the buses in DMA data transfer and how?",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q4.22",
                                text: "What is direct memory access technique? Explain the working of DMA controller with diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.23",
                                text: "Explain the working of DMA controller with the help of a block diagram.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.24",
                                text: "Draw the block diagram of DMA controller and explain.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.5": {
                        name: "Programmed I/O",
                        questions: [
                            {
                                id: "Q4.25",
                                text: "Explain programmed I/O with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "medium"
                            }
                        ]
                    }
                },
            },
            unit5: {
                name: "Pipeline & Vector Processing",
                subtopics: {
                    "5.1": {
                        name: "Parallel Processing Concepts",
                        questions: [
                            {
                                id: "Q5.01",
                                text: "How to improve throughput in pipelining? Write down the mechanisms to ensure the control hazards in pipelining.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.02",
                                text: "What do you understand by parallel processing? Describe Flynn's classification of parallel processing.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q5.03",
                                text: "What is Parallel Processing? Explain the concept of vector processing in detail.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.04",
                                text: "Define parallel processing?",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.05",
                                text: "Explain Flynn's classification of parallel architecture.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.06",
                                text: "Describe Flynn's classification of parallel processing.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.07",
                                text: "Define parallel processing. Describe Flynn's classification of parallel processing.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.2": {
                        name: "Pipelining Concepts",
                        questions: [
                            {
                                id: "Q5.08",
                                text: "Explain the concept of Pipelining. Explain various types of pipelining in detail.",
                                frequency: 1,
                                marks: 10,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.09",
                                text: "What do you understand by Pipelining? Differentiate between instruction pipeline and arithmetic pipeline.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.10",
                                text: "What is the use of pipelining? Prove that an M-stage linear pipeline can be at most M times faster than that of non-pipelined serial processor.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q5.11",
                                text: "Define pipelining.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.12",
                                text: "What are the various pipelining hazards caused by resource usage conflicts in various instructions? Also discuss the methods to remove them.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.3": {
                        name: "Arithmetic Pipeline",
                        questions: [
                            {
                                id: "Q5.13",
                                text: "Explain the arithmetic pipeline architecture with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2024(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.14",
                                text: "Specify a pipeline configuration to carry out arithmetic operation (Ai â€¢ Bi) + Ci.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.15",
                                text: "Specify a pipeline configuration to carry out arithmetic operation (Ai + Bi) (Ci + Di).",
                                frequency: 1,
                                marks: 4,
                                years: ["2021"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.16",
                                text: "Explain arithmetic pipeline with suitable example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.4": {
                        name: "Instruction Pipeline",
                        questions: [
                            {
                                id: "Q5.17",
                                text: "Draw and explain flow chart and timing diagram for the four segment instruction pipeline.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.18",
                                text: "Consider the execution of the program. 15000 instructions a linear pipeline with a clock rate of 25 MHz. Assume that the instruction pipeline has 5 stages and that one instruction is issued per clock cycle. Calculate Speed up factor, Efficiency and Throughput.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.19",
                                text: "Consider the execution of the program 15000 instruction a linear pipeline processor with a clock rate of 25 MHz. Assume that the instruction pipeline has 5 stages and that one instruction is issued per clock cycle calculate (i) speed up factor (ii) efficiency (iii) throughput.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021"],
                                priority: "high"
                            },
                            {
                                id: "Q5.20",
                                text: "A nonpipeline system takes 50 ns to process a task. The same task can be processed in a six-segment pipeline with a clock cycle of 10 ns. Determine the speed up ratio of the pipeline for 100 tasks. What is the maximum speed up that can be achieved?",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.5": {
                        name: "RISC Pipeline",
                        questions: [
                            {
                                id: "Q5.21",
                                text: "Explain RISC Pipeline.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.22",
                                text: "Describe Pipeline Processing.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.6": {
                        name: "Vector Processing",
                        questions: [
                            {
                                id: "Q5.23",
                                text: "Describe the working of vector processor and array processor with example.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.24",
                                text: "Write short notes on: (i) Vector processing (ii) Array processing.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "medium"
                            },
                            {
                                id: "Q5.25",
                                text: "Explain Processor level parallelism.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025(AM)"],
                                priority: "medium"
                            }
                        ]
                    }
                },
            }
        };
