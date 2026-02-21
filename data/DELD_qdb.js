const questionDatabase = {
    unit1: {
        name: "NUMBER SYSTEMS & BOOLEAN ALGEBRA",
        subtopics: {
            "1.1": {
                name: "Number Systems",
                questions: [
                    {
                        id: "Q1.1.1",
                        text: "Convert: Decimal number (25) to Binary number",
                        frequency: 1,
                        marks: 2,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.1.2",
                        text: "Do as directed: (i) Convert (2AC5-D)16 to decimal, octal and binary (ii) Solve (DDCC)16+(BBAA)16=(  )16",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.1.3",
                        text: "Solve the following: (i) Convert the binary number (11001010) into gray code (ii) Convert (1010000) gray code to decimal code (iii) Find the value of base X: (193)X=(623)5 (iv) Convert (3C9A)16 into decimal.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "1.2": {
                name: "Binary Codes",
                questions: [
                    {
                        id: "Q1.2.1",
                        text: "(8-4-2-1) code for decimal digit 3 is __",
                        frequency: 1,
                        marks: 1,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.2.2",
                        text: "Binary of gray code 00110110 is __",
                        frequency: 1,
                        marks: 1,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.2.3",
                        text: "Excess 3 code of decimal number 9 is __",
                        frequency: 1,
                        marks: 1,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.2.4",
                        text: "Convert 10101001 in Gray code.",
                        frequency: 2,
                        marks: 4,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q1.2.5",
                        text: "Discuss weighted code with example.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.2.6",
                        text: "Convert: Gray code (100111) into Binary number",
                        frequency: 1,
                        marks: 2,
                        years: ["2024(ND)"],
                        priority: "medium"
                    }
                ]
            },
            "1.3": {
                name: "Complements",
                questions: [
                    {
                        id: "Q1.3.1",
                        text: "2's complement of 101100 is __",
                        frequency: 1,
                        marks: 1,
                        years: ["2020(ND)"],
                        priority: "medium"
                    }
                ]
            },
            "1.4": {
                name: "Boolean Algebra",
                questions: [
                    {
                        id: "Q1.4.1",
                        text: "State and prove Demorgan's law.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.4.2",
                        text: "Explain about Demorgan's theorem.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.4.3",
                        text: "State & Prove Demorgan's law.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.4.4",
                        text: "Explain laws of Boolean Algebra.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "1.5": {
                name: "K-Map Simplification",
                questions: [
                    {
                        id: "Q1.5.1",
                        text: "Solve the following using K-map: (i) F1(A,B,C,D)=Î£m(1,5,6,12,13,14)+Î£d(2,4) (ii) F2(A,B,C,D)=Î m(0,1,2,4,6,8,9,11,12)",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.5.2",
                        text: "Minimise the following function using K-map: (i) F(A,B,C,D)=Î M(6,7,8,9)+d(12,13,14,15) in POS minimal form (ii) F(A,B,C,D)=Î£m(1,2,6,7,8,13,14,15)+d(0,3,5,12) in SOP minimal form.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.5.3",
                        text: "Reduce the following function using Karnaugh map and implement using basic gates: f(A,B,C,D)=ABD+ABCD+Ä€BD+Ä€BCD",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.5.4",
                        text: "Minimize the following expression using k-map and realize using logic gates: F1(w,x,y,z)=Î£m(0,3,4,8,10,12,15)+d(1,13)",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.5.5",
                        text: "Simplify the logic expression using K-map: F(A,B,C,D)=Î£m(0,1,2,3,5,7,8,9,10,12,13) and also design logic circuit using gates.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "1.6": {
                name: "Quine-McCluskey Method",
                questions: [
                    {
                        id: "Q1.6.1",
                        text: "Simplify the following using Tabulation method: F(A,B,C,D)=Î£m(1,3,5,8,9,11,15)+d(2,13)",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.6.2",
                        text: "Simplify the following boolean function using McCluskey method: F(A,B,C,D)=Î£m(0,1,3,7,8,9,11,15)",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.6.3",
                        text: "Simplify the following Boolean function, F(W,X,Y,Z)=Î£m(2,6,8,9,10,11,14,15) using Quine-McCluskey tabular method.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.6.4",
                        text: "Reduce the following equation using Quine McCluskey method of minimisation: F(A,B,C,D)=Î£m(0,1,3,4,5,7,10,13,14,15)",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.6.5",
                        text: "Minimize the following digital function using McCluskey method: F(P,Q,R,S)=Î£m(0,1,5,8,9,10,11,13)+d(4,12,14)",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.6.6",
                        text: "Simplify the following using Tabulation method: F=Î£m(0,2,3,5,8,10,11,13)",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "1.7": {
                name: "Error Detection",
                questions: [
                    {
                        id: "Q1.7.1",
                        text: "A message below coded in the 7-bit Hamming Code is transmitted through channel. Decode the message assuming that single error occurred in each code word: (i) 1001001 (ii) 0111001 (iii) 1110110 (iv) 0011011. Find the correct code in each case.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.7.2",
                        text: "For 7 bit hamming code received code is 1111101 find error use even parity.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.7.3",
                        text: "What do you understand by error correcting code? Construct (7,4) hamming code for message (1000).",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.7.4",
                        text: "For 7 bit hamming code received code is 1111101 find error. Use even parity.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.7.5",
                        text: "Describe briefly error correcting code. If a seven bit Hamming code is received as 1111101. Find the correct code.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.7.6",
                        text: "The Hamming code 101101101 is received. Correct it if any errors. Odd parity is used.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q1.7.7",
                        text: "A message below coded in the 7-bit Hamming Code is transmitted through a noisy channel. Decode the message assuming that at most a single error occurred in each code word: 1110110",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "1.8": {
                name: "Logic Gates",
                questions: [
                    {
                        id: "Q1.8.1",
                        text: "Describe NAND and NOR gate as universal gate.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q1.8.2",
                        text: "Convert the Boolean Expression ((A+B)C)D using NAND gates only.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023(AM)"],
                        priority: "medium"
                    }
                ]
            }
        }
    },
    unit2: {
        name: "LOGIC FAMILIES & PROGRAMMABLE DEVICES",
        subtopics: {
            "2.1": {
                name: "Logic Families",
                questions: [
                    {
                        id: "Q2.1.1",
                        text: "Compare RTL, DTL, TTL and ECL on the basis of: (i) Component used (ii) Fan out (iii) Propagation delay (iv) Application",
                        frequency: 1,
                        marks: 4,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.2",
                        text: "Define Fan in and Fan out.",
                        frequency: 1,
                        marks: 4,
                        years: ["2021(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.3",
                        text: "Explain propogation delay time with example.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.4",
                        text: "Explain the difference between TTL and CMOS.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.5",
                        text: "Define Fan in & Fan out.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.6",
                        text: "Define Noise Margin, Fan-in, Fan-out & Power Dissipation.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.7",
                        text: "Define the following parameter: (i) Noise margin (ii) Power dissipation (iii) Propagation delay (iv) Fan out",
                        frequency: 1,
                        marks: 4,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.8",
                        text: "Write short notes on: (i) Noise margin (ii) Propagation Delay",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.9",
                        text: "Compare the performance TTL, CMOS and ECL logic.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.1.10",
                        text: "Explain the comparison of DTL, RTL, TTL and ECL logic families.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "2.2": {
                name: "TTL Logic",
                questions: [
                    {
                        id: "Q2.2.1",
                        text: "Explain the working of TTL circuit with Totem pole output configuration.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.2.2",
                        text: "Describe TTL open collector circuit.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.2.3",
                        text: "Describe Transistor Transistor Logic in Totem Pole output arrangement.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.2.4",
                        text: "Draw the circuit diagram and explain the operation of 2-input TTL NAND gate with open collector output.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "2.3": {
                name: "CMOS Logic",
                questions: [
                    {
                        id: "Q2.3.1",
                        text: "With the help of neat diagram, explain the working of: (i) CMOS inverter and (ii) CMOS NOR gate",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.3.2",
                        text: "Describe CMOS NAND gate.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.3.3",
                        text: "Describe CMOS NOR gate.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q2.3.4",
                        text: "Explain the operation of CMOS NOR Gate with suitable diagram.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.3.5",
                        text: "With the help of diagram, explain CMOS NAND and NOR gate.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "2.4": {
                name: "ECL Logic",
                questions: [
                    {
                        id: "Q2.4.1",
                        text: "Explain ECL with circuit diagram.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.4.2",
                        text: "Explain ECL logic family with reasons why it is the fastest among the logic family.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.4.3",
                        text: "What is ECL logic? With the help of a neat circuit diagram, explain the working of a two input ECL OR/NOR gate.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "2.5": {
                name: "Interfacing",
                questions: [
                    {
                        id: "Q2.5.1",
                        text: "Explain with neat diagram interfacing of a TTL gate driving CMOS gate and Vice versa.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "2.6": {
                name: "Memory",
                questions: [
                    {
                        id: "Q2.6.1",
                        text: "Explain difference between ROM and RAM.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    }
                ]
            },
            "2.7": {
                name: "Programmable Logic",
                questions: [
                    {
                        id: "Q2.7.1",
                        text: "Implement the following Boolean function using: (i) PLA F1(A,B,C)=Î£m(3,4,5,6,7) F2(A,B,C)=Î£m(2,5,6,7)",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.7.2",
                        text: "Write short note on: (i) PLA (ii) PAL and FPGA",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.7.3",
                        text: "Implement following function using PLA: F1(A,B,C)=Î£m(4,5,7) F2(A,B,C)=Î£m(4,5,7)",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.7.4",
                        text: "Implement following function using suitable PAL: W(A,B,C,D)=Î£m(2,4,5,6,8,9,12,13,15) X(A,B,C,D)=Î£m(1,3,4,6,9,11,12,14,15) Y(A,B,C,D)=Î£m(0,2,4,6,8,12) Z(A,B,C,D)=Î£m(2,3,8,9,12,13)",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q2.7.5",
                        text: "What do you understand by PLA, PAL, and FPGA?",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            }
        }
    },
    unit3: {
        name: "COMBINATIONAL LOGIC CIRCUITS",
        subtopics: {
            "1.8": {
                name: "Logic Gates",
                questions: [
                    {
                        id: "Q1.8.1",
                        text: "Draw the circuit-diagram of universal gates using 1-channel MOS logic and explain their working.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    }
                ]
            },
            "3.1": {
                name: "Combinational Circuits",
                questions: [
                    {
                        id: "Q3.1.1",
                        text: "Fill in the blanks: (i) __ consists of logic gates where output at any instant is determined by present combination of input as well as previous state of output. (ii) __ is an example of combinational circuit. (iii) Logical expression of carry out in half adder is __ (iv) Minimum number of NAND gates required for designing Half Adder is __",
                        frequency: 1,
                        marks: 4,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.1.2",
                        text: "Define the term combinational circuit.",
                        frequency: 2,
                        marks: 4,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.1.3",
                        text: "Explain design procedure for combinational circuit.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "3.2": {
                name: "Adders",
                questions: [
                    {
                        id: "Q3.2.1",
                        text: "Design 4-bit look ahead carry adder with suitable diagram.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.2",
                        text: "Describe full adder circuit with diagram and truth table.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.3",
                        text: "Describe Half Adder with its truth table.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.4",
                        text: "Describe full adder circuit with diagram & truth table.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.5",
                        text: "Design Half Adder using NAND gates.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.6",
                        text: "Design & explain working of BCD adder.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.7",
                        text: "Draw and explain the block diagram of n-bit parallel adder circuit.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.8",
                        text: "Design BCD adder to add two BCD number.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.9",
                        text: "Design half adder using basic gates with truth table.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.10",
                        text: "Draw and explain look ahead Carry adder.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.2.11",
                        text: "Design a 4 bit (Digit) BCD adder circuit.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "3.3": {
                name: "Multiplexers",
                questions: [
                    {
                        id: "Q3.3.1",
                        text: "Design full adder using 4:1 MUX.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.3.2",
                        text: "Implement the Boolean expression F(A,B,C)=Î£m(0,2,5,6) using 4:1 multiplexer.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.3.3",
                        text: "Design 32:1 multiplexer using two 16:1 multiplexer & one 2:1 multiplexer.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.3.4",
                        text: "Design 32 to 1 multiplexer using two 74LS150 ICs.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.3.5",
                        text: "What is Multiplexer? Explain with example.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.3.6",
                        text: "Design full adder using multiplexer.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.3.7",
                        text: "Implement F=Î£m(0,1,3,4,7,8,9,11,14,15). Design MUX using (i) 4:1 & (ii) 8:1",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "3.4": {
                name: "Decoders",
                questions: [
                    {
                        id: "Q3.4.1",
                        text: "Design 4x16 decoder using 3x8 decoder.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q3.4.2",
                        text: "Design a BCD to 7-segment decoder with truth table and K-maps.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.4.3",
                        text: "Draw and explain circuit for 3 to 8 decoder.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.4.4",
                        text: "Give a block diagram of 4x16 Decoder using 3x8 decoders and explain its working.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "3.5": {
                name: "Comparators",
                questions: [
                    {
                        id: "Q3.5.1",
                        text: "Design and implement comparator.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q3.5.2",
                        text: "Design 4-bit comparator circuit.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    }
                ]
            },
            "4.3": {
                name: "Flip-Flop Conversion",
                questions: [
                    {
                        id: "Q4.3.1",
                        text: "Convert T flip-flop to D flip-flop and design the circuit.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    }
                ]
            }
        }
    },
    unit4: {
        name: "SEQUENTIAL LOGIC CIRCUITS",
        subtopics: {
            "4.1": {
                name: "Sequential Circuits",
                questions: [
                    {
                        id: "Q4.1.1",
                        text: "Define sequential circuits.",
                        frequency: 2,
                        marks: 4,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    }
                ]
            },
            "4.2": {
                name: "Flip-Flops",
                questions: [
                    {
                        id: "Q4.2.1",
                        text: "What is race around condition for J-K flip-flop? How it can be avoided in master slave flip-flop?",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.2.2",
                        text: "Describe S-R flip-flop with diagram.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.2.3",
                        text: "What is race around condition and also describe master slave Flip-Flop.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q4.2.4",
                        text: "Explain JK flip-flop with truth table excitation table.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.2.5",
                        text: "Describe S-R Flip-Flop with diagram.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.2.6",
                        text: "Define edge triggering & level triggering.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.2.7",
                        text: "What is Race-around Condition? Explain the operation of master slave JK flip-flop.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.2.8",
                        text: "What is race around condition? How it is avoided.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.2.9",
                        text: "What is flip flop?",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "medium"
                    }
                ]
            },
            "4.3": {
                name: "Flip-Flop Conversion",
                questions: [
                    {
                        id: "Q4.3.1",
                        text: "Convert SR flip-flop to T flip-flop.",
                        frequency: 1,
                        marks: 4,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.3.2",
                        text: "Describe how to convert D flip flop into T flip-flop.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q4.3.3",
                        text: "Design JK flip flop using SR flip flop.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "4.4": {
                name: "Shift Registers",
                questions: [
                    {
                        id: "Q4.4.1",
                        text: "Design Serial in Serial Out (SISO) and parallel in Serial Out (PISO) shift register using D flip-flop.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.4.2",
                        text: "Define universal shift register.",
                        frequency: 1,
                        marks: 4,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.4.3",
                        text: "Explain about SISO shift register with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.4.4",
                        text: "Describe in brief various types of shift registers.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.4.5",
                        text: "What are registers? Differentiate between Buffer Register & shift register.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.4.6",
                        text: "What is Shift Register? Explain application of Shift Register.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.4.7",
                        text: "Write short notes on: (1) SISO (2) SIPO (3) PIPO (4) PISO",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "4.5": {
                name: "Counters",
                questions: [
                    {
                        id: "Q4.5.1",
                        text: "Design and implement 4 bit synchronous up counter.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.2",
                        text: "Explain ring counter with state table and wave forms.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.3",
                        text: "Design 4-bit binary Ripple Counter (Up/Down).",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.4",
                        text: "Explain the working of 4 bit asynchronous counter.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.5",
                        text: "Design the counter that goes through state 1,2,4,5,7,10,11,14 using J-K flip flops.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.6",
                        text: "Design mod 5 synchronous counter.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.7",
                        text: "Design UP/DOWN ripple counter.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.8",
                        text: "Draw the logic diagram of ring counter and explain it.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    },
                    {
                        id: "Q4.5.9",
                        text: "Design synchronous 3-bit up-down counter using JK flip-flop.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            }
        }
    },
    unit5: {
        name: "STATE MACHINES & HDL",
        subtopics: {
            "5.1": {
                name: "State Machines",
                questions: [
                    {
                        id: "Q5.1.1",
                        text: "Write short notes on Mealy and Moore machine.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.2",
                        text: "Define state diagram.",
                        frequency: 1,
                        marks: 4,
                        years: ["2021(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.3",
                        text: "Describe Mealy State Machine.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.1.4",
                        text: "Describe Moore State Machine.",
                        frequency: 2,
                        marks: 8,
                        years: ["2021(ND)", "2023(ND)"],
                        priority: "high"
                    },
                    {
                        id: "Q5.1.5",
                        text: "What are the application of finite state machine model? Compare Meelay machine with Moore m/c with block diagram.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.6",
                        text: "Define State diagram.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.7",
                        text: "Describe Moore Machine & Mealy Machine with block diagram.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.8",
                        text: "Define finite state machine.",
                        frequency: 1,
                        marks: 4,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.9",
                        text: "Differentiate between Mealy machine and Moore machine.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.10",
                        text: "Write difference between Moore and Mealy Machine.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.11",
                        text: "Explain Mealy machine with example.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.1.12",
                        text: "Write difference between Mealy and Moore Machine.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "5.2": {
                name: "ASM Charts",
                questions: [
                    {
                        id: "Q5.2.1",
                        text: "Describe basic components of ASM charts.",
                        frequency: 1,
                        marks: 8,
                        years: ["2021(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.2.2",
                        text: "Describe Basic Components of ASM charts.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(ND)"],
                        priority: "medium"
                    }
                ]
            },
            "5.3": {
                name: "VHDL Basics",
                questions: [
                    {
                        id: "Q5.3.1",
                        text: "Discuss the various operators used in VHDL.",
                        frequency: 1,
                        marks: 4,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.2",
                        text: "What is HDL? What are various uses of VHDL?",
                        frequency: 1,
                        marks: 4,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.3",
                        text: "Explain structure of VHDL code.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.4",
                        text: "Explain VHDL Data types.",
                        frequency: 1,
                        marks: 8,
                        years: ["2022(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.5",
                        text: "Describe four VHDL operators.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.6",
                        text: "What is VHDL. Give data flow and algorithmic and structural description.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.7",
                        text: "Explain lexical element and data object types in VHDL.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.8",
                        text: "Write syntax for: (i) entity and (ii) architecture in VHDL",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.3.9",
                        text: "Discuss lexical elements and data objects types.",
                        frequency: 1,
                        marks: 4,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            },
            "5.4": {
                name: "VHDL Programming",
                questions: [
                    {
                        id: "Q5.4.1",
                        text: "Write a program in VHDL using data flow modelling for half adder.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.4.2",
                        text: "Write a program in VHDL using behavioural modelling for AND gate.",
                        frequency: 1,
                        marks: 8,
                        years: ["2020(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.4.3",
                        text: "For Half Subtractor write a program in VHDL using Data Flow.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.4.4",
                        text: "Write a program in VHDL for OR gate.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(ND)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.4.5",
                        text: "Write VHDL code to design 4 to 1 MUX.",
                        frequency: 1,
                        marks: 8,
                        years: ["2023(AM)"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.4.6",
                        text: "Write a program in VHDL using structural modelling for 4x1 multiplexer.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    },
                    {
                        id: "Q5.4.7",
                        text: "Write a program in VHDL using behavioral and data flow for OR gate.",
                        frequency: 1,
                        marks: 8,
                        years: ["2024(AM)_P2"],
                        priority: "medium"
                    }
                ]
            }
        }
    }
};
