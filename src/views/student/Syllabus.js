import { Button, IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import Animate from '../../components/Animate'
import Modal from '../../components/Modal'
import Topbar from '../../components/Topbar'

export default class Syllabus extends Component {
    state = {
        courses: [
            {
                sem: "First Semester",
                subjects: [
                    {
                        code: "BBCACCHC101",
                        title: "Computer Fundamentals",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Introduction to Computer- Definition of Computer System; Evolution of Computer – a brief history, Classification of computer; Generation of Computer.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Computer System Architecture – Definition of Hardware; Basic units of Computer System; CPU – Control Unit, ALU; System Buses, Memory Unit – Primary Memory, Secondary Memory, Cache Memory, Virtual Memory</p>
                        
                        <p>- definition, classification, features and functions; measuring unit of Memory – Bit, Byte, KB, MB, GB;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Input Devices – Keyboard, Mouse, Scanner; Output Devices – Monitor, Printer.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Introduction to Number System – Positional and Non Positional number system; Various Number System – Decimal, Binary, Octal, Hexadecimal; Number system conversions – working with integer and 8 LH fractional number; Simple binary arithmetic – addition, subtraction, multiplication, divisions.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Introduction to Software – definition of software; Classification of Software; Introduction to Operating System – Definition of OS, Functions of OS, basic concept of different type of OS-batch processing OS, Multitasking OS, Multi-user OS, Network OS; Application Software – Definition of Application Software, Types of Application Software.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Introduction to Programming Languages, Machine Language, Assembly Language, High Level Language.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Problem Solving: Flow Charts, Decision Tables and Pseudo Code.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Familiarisation and using MS package – Word, Excel, PowerPoints (Version – MS office 2007 or higher)</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Computer Fundamentals - P.K.Sinha<br>
                        2. Fundamentals of Computers - U. Rajaraman.<br>
                        3. Introduction to Computers with MS-Office-Leon, TMH<br><br>
                        
                        `
                    },
                    {
                        code: "BBCACCHC102",
                        title: "Introduction to C Programming",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Introduction: Problem Analysis, need for programming languages, overview of C language, Basic Structure, Character sets, Keywords, Identifiers, Constants, Variables, Data types.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Operators: Arithmetic, Relational, Logical and Assignment; Increment, Decrement and Conditional, Operator Precedence and Associations; Expressions, Expression evaluation and type conversion. Formatted input and output.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Statements: Assignment, Initialization, Decision making, looping and control structure.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>&nbsp;Array, String, String handling function.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Functions – Arguments passing, Return values and their types, recursion.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Enumerated data types, Structures, Arrays of Structures, Array within structure, Union.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Pointers: Declaration and initialization, accessing variables through pointer arithmetic, Pointers and arrays, Passing pointer to function, Pointer to functions and structures, Dynamic Storage Allocation.</p>
                        
                        <p>&nbsp;</p>
                        File handlings: Opening, Closing, I/O operations.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Programming in C-B.S. Gottfried ( Sahaum Series)<br>
                        2. Programming in ANSI C- E. Balaguruswami ( TMH )<br><br>
                        
                        `
                    },
                    {
                        code: "**103",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "BAECCEST104",
                        title: "Environmental Studies",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Unit 1:</strong> <strong>Basics of Environmental Studies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (05 lectures)</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>Definition, Nature, Scope and Importance; Components of environment: Environmental education&nbsp;</p>
                        
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                        
                        <p><strong>Unit 2:</strong> <strong>Natural Resources: Renewable and Nonrenewable Resources&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (10 lectures)</strong>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</p>
                        
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nature and natural resources their conservation and associated problems:</p>
                        
                        <ul>
                            <li>Forest resources: Uses, types and importance, Joint Forest Management &amp; Tribal population, Deforestation and its effects</li>
                            <li>Water resources: Distribution of water on Earth; Use, over exploitation of surface and ground water; Dams: Benefits and problems; Flood and Drought</li>
                            <li>Mineral resources: Mineral resources in India; Use and exploitation, Social impacts of mining</li>
                            <li>Food resources: World food problems and food insecurities.</li>
                            <li>Energy resources: Renewable and Nonrenewable energy sources; Use of alternate energy sources - Case studies</li>
                            <li>Land resources: Land as a resource; Land degradation, landslides, soil erosion, desertification</li>
                            <li>Use of resources for sustainable development</li>
                        </ul>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 3: Ecology and Ecosystems&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (08 lectures)</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>Concept of ecology, Population ecology, Community ecology</p>
                        
                        <ul>
                            <li>Concept of an ecosystem, different types of ecosystem</li>
                            <li>Food chains, food weds and ecological succession</li>
                            <li>Energy flow in the ecosystem and energy flow models</li>
                        </ul>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 4: Biodiversity and its conservation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (08 lectures)</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <ul>
                            <li>Biodiversity: Levels of biological diversity</li>
                            <li>Values of biodiversity</li>
                            <li>Hot-Spots of biodiversity, Mega-biodiversity countries</li>
                            <li>Threat to biodiversity</li>
                            <li>Threatened and endemic species of India</li>
                            <li>Conservation of biodiversity (<em>In- situ</em> and <em>Ex-situ)</em></li>
                            <li>Ecosystem services: Ecological, Economical, Social, Ethical, Aesthetical and Informational values</li>
                        </ul>
                        
                        <p>&nbsp;</p>
                        
                        <p>&nbsp;<strong>Unit 5: Environmental Pollution and Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (08 lectures)</strong>&nbsp;&nbsp;</p>
                        
                        <p>(a) Nature, Causes, Effects and Control measures of –</p>
                        
                        <p>(i) Air pollution&nbsp;&nbsp;&nbsp;&nbsp; (ii) Water pollution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) Soil pollution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iv) Noise pollution&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>v) Nuclear hazards&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (b) Fireworks Pollution: Definition, Composition/Ingredients, effects, monitoring strategies</p>
                        
                        <ul>
                            <li>Solid waste management: Causes, effects and disposal methods; Management of biomedical and municipal solid wastes</li>
                            <li>Disaster management: Floods, Earthquake, Cyclone and Landslides</li>
                        </ul>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 6: Environmental Policies and Practices&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (10 lectures)</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <ul>
                            <li>Constitutional Provisions for protecting environment- Articles 48(A), 51 A (g)</li>
                            <li>Environmental Laws: The Environment (Protection) Act, 1986; The Air (Prevention and Control of Pollution) Act, 1981; The Water (Prevention and Control of Pollution) Act 1974; Forest (Conservation) Act, 1980</li>
                            <li>The wildlife Protection Act, 1972</li>
                            <li>Climate change, Global warming, ENSO, Acid rain, Ozone layer depletion; Montreal and Kyoto Protocols</li>
                        </ul>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 7: Human Communities and Environment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (06 lectures)</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <ul>
                            <li>Human population growth; Impacts on environment</li>
                            <li>Population explosion – Family Welfare Programme</li>
                            <li>Environment and human health: Concept of health and disease; Common communicable and Non- communicable diseases; Public awareness</li>
                            <li>Environment movements in India: Chipko Movements, Silent Valley Movement, Movements in Karnataka</li>
                        </ul>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 8: Field Work Report/Project Report/Term paper (based on any one of the following topics and to be evaluated by internal teachers only)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (05 lectures</strong>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <ul>
                            <li>Environmental assets - River/Forest/Grassland/Hill/Mountain <em>etc</em>.</li>
                            <li>Environmental pollution - Urban/Rural/Industrial/Agricultural</li>
                            <li>Study of common Plants/Insect /Birds/Wild life <em>etc</em>.</li>
                            <li>Study of simple ecosystems: Pond/River/Hill slope <em>etc</em>.</li>
                            <li>Municipal solid waste management and handling.</li>
                        </ul>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <br><br>
                        `
                    },
                ]
            },
            {
                sem: "Second Semester",
                subjects: [
                    {
                        code: "BBCACCHC201	",
                        title: "Digital Logic",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        Number systems: Positional number systems; Binary, Octal , Hexadecimal and Decimal number systems; conversion of a number in one system to the other; Representation of signed numbers- signed magnitude, one's complement, 2's complement representation techniques, Merits of 2's complement representation scheme; Various binary codes- BCD, excess -3, Gray code; Binary arithmetic- addition, subtraction, multiplication and division of unsigned binary numbers.<br>
                        <br>
                        Logic gates: Basic logic operations- logical sum(or), logical product (AND), complementation (not), Anti coincidence (EX-OR)and coincidence (EX-NOR) operations: Truth tables of Basic gates; Boolean Variables and Expressions; Demorgan's theorem; Universal gates- NAND and NOR; Boolean expressions Simplification - Algebraic technique, Karnaugh map technique, 3 variable and 4 variable Karnaugh map.<br>
                        &nbsp;<br>
                        Combinational Circuits: Half adder, full adder, binary magnitude comparator, adder /subtractor circuits, multiplexer and demultiplexer circuits, BCD adder/ subtractor; ALU; parity generators, code converters, priority encoders, PLAs.<br>
                        &nbsp;&nbsp;&nbsp; &nbsp;<br>
                        Sequential Circuit: flip-flops - RS, Clocked RS , D flip-flop, &nbsp;JK flip-flop, T flip-flop,; Race Condition, Master Slave JK: Registersuniversa, shift registers; Counters - binary, decade; modulo-r divider, Practical IC's; Sequential Machine design.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Digital Principles and Applications: Malvino and Leach<br>
                        2. Modern Digital Electronics : R.P. Jain<br><br>
                        
                        `
                    },
                    {
                        code: "BBCACCHC202",
                        title: "Data Structure using C",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Introduction: Introduction to algorithm, analysis for space and time requirements.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Linear data structures and their sequential representation: Array, Stack, queue, circular queue, dequeue and their operation's and applications.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Linear data structures and their linked representation: linear linked list, doubly linked list, linked stack and linked queue and their operation's and applications.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Nonlinear data structure: Binary trees, binary search trees, representations and operations. Thread representations, sequential representations, graphs, and their representation.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>&nbsp;Searching: linear search and binary search</p>
                        
                        <p>&nbsp;</p>
                        Sorting: bubble, insertion, selection, quick and merge sort.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Data Structure using C- A.M. Tanenbaum ( PHI)<br><br>
                        
                        `
                    },
                    {
                        code: "**203",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "**204",
                        title: "**One from pool of AECC-MIL (ENGLISH / MIL )",
                        content: null
                    },
                ]
            },
            {
                sem: "Third Semester",
                subjects: [
                    {
                        code: "BBCACCHT301	",
                        title: "Computer Networks",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Data communications concepts: </strong>Digital and analog transmissions-Modem, parallel and serial, synchronous and asynchronous, Modes of communication: Simplex, half duplex, full duplex, Concept of multiplexing, De-multiplexing.</p>
                        
                        <p><strong>Types of Networks: </strong>LAN, MAN, WAN</p>
                        
                        <p><strong>Network Topologies: </strong>Bus, Star, Ring, Mesh, Tree, Hybrid</p>
                        
                        <p><strong>Communication Channels:</strong></p>
                        
                        <p><strong>Wired transmissions: </strong>Telephone lines, leased lines, switch line, coaxial cables-base band, broadband, optical fiber transmission.</p>
                        
                        <p><strong>Wireless Transmission: </strong>(Standards and Specification) Microwave transmission, Infrared transmission, Laser transmission, Radio transmission and Satellite transmission and Blue Tooth,&nbsp;Frequency Spectrum.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Communication Switching Techniques: </strong>Circuit Switching, Message Switching, Packet Switching.</p>
                        
                        <p><strong>Network Reference Models: </strong>OSI Reference Model, TCP/IP Reference Model, Comparison of OSI and TCP/IP Reference Models.</p>
                        
                        <p><strong>Polling/Selection Protocols: </strong>Character and bit protocols, binary synchronous control (BSC), HDLC, HDLC options HDLC frame format, code transparency and synchronization, HDLC transmission process, HDLC subsets, SDLC, protocol conversion.</p>
                        
                        <p><strong>The X.25 and supporting protocols: </strong>Features of X.25, Layers of X.25 and the physical layer, X.25 and the data link layer, X.25 standards, X.25 channel options, flow control principles.</p>
                        
                        <p><strong>Types of Multiplexing: </strong>FDM, TDM, CDMA</p>
                        
                        <p><strong>MAC sub layer: </strong>CSMA/CD/CA, IEEE standards (IEEE802.3 Ethernet, Gigabit Ethernet, IEEE 802.4 Token Bus, IEEE 802.5 Token Ring)</p>
                        <strong>The Network Layer: </strong>Design Issues, Routing Algorithms: Optimality Principle, Shortest Path Routing, Congestion Control Policies, Concept of Internetworking.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Computer Networks, Tanenbaum, Andrew, Fifth Edition, PHI<br>
                        2. Data Communication and Networking, Behrouz A. Forouzan, Fourth Edition<br>
                        3. Computer Today, S.K. Basandra, First Edition, Galgotia<br>
                        4. Data Communication System, Black, Ulysse, Third Edition, PHI<br>
                        5. Data and Computer Communications, Stalling, Ninth Edition, PHI<br><br>
                        
                        `
                    },
                    {
                        code: "BBCACCHC302",
                        title: "Principles of Operating System",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Lecturer [Credit: 4]</strong></p>
                        
                        <p>Operating system as an extended machine and a resource manager, operating system conceptsprocess, files, shell, Operating system structure: monolithic system, layered systems, virtual machines, client server model. Idea of multiprogramming, multiprocessing, batch processing and time sharing. Real time systems [30</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Concurrent processes: </strong>Critical section problem, Semaphores &amp; Synchronization. [10</p>
                        
                        <p><strong>CPU scheduling: </strong>Scheduling concepts and algorithms [15</p>
                        
                        <p><strong>Memory management: </strong>Static &amp; dynamic partitioning, Dynamic relocation, Paging &amp; demand paging memory management, Virtual memory, Replacement algorithm, Segmented memory management, Thrashing. [15</p>
                        
                        <p><strong>Device management: </strong>Scheduling concept and algorithm, spooling. [10</p>
                        
                        <p>Deadlock detection, prevention and avoidance. [10</p>
                        
                        <p><strong>File management: </strong>File concept, access methods, allocation methods, Directory concept.[10</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Practical [Credit:2]</strong></p>
                        
                        <p><strong>Unix Editors and commands: </strong>ed editor, vi editor, Redirections, piping, tees, filters, UNIX utilities: grep, sed, awk, tr etc.</p>
                        
                        <p><strong>Introduction to Shell scripts: </strong>Bourne shell, C shell, Shell variables, Scripts, meta-characters and</p>
                        
                        <p>environments, if and case statements, for, while and until loops.</p>
                        <strong>Awk programming: </strong>Awk arithmetic and variables, Awk built-in variable names and operators, arrays, strings.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Modern Operating Systems- A.S. Tanenbaum (PHI)<br>
                        2. UNIX – S.Das, TMH<br><br>
                        
                        `
                    },
                    {
                        code: "BBCACCHC303",
                        title: "Introduction to Algorithm",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Overview and introduction: </strong>Goals, mechanics, what is an algorithm, analyzing insertion sort.</p>
                        
                        <p><strong>Asymptotics and Summation: </strong>Basic math overview, Asymptotics notation, Limit Rule, Summation techniques.</p>
                        
                        <p><strong>Recursive Algorithms and Recurrences: </strong>Divide and Conquer, Mergesort, Writing and solving recurrences.</p>
                        
                        <p><strong>Heapsort: </strong>Heap data structure, Heapsort, Priority queues.</p>
                        
                        <p><strong>Lower bounds and Linear-time sorting: </strong>Sorting lower bound, stability, counting sort, radix sort.</p>
                        
                        <p><strong>Selection: </strong>Finding max, min, median. Order statistics.</p>
                        
                        <p><strong>The divide-and-conquer paradigm</strong>: Divide-and conquer, quicksort, matrix multiplication.</p>
                        
                        <p><strong>Basic data structures, Hash tables, and Binary Search Trees.</strong></p>
                        
                        <p><strong>Number theoretic algorithms: </strong>Basic concepts, GCD, modular exponentiation.</p>
                        
                        <p><strong>Elementary Graph Algorithms: </strong>Depth-first search, Topological sort, Breadth-first search.</p>
                        
                        <p><strong>Shortest paths: </strong>Single-source shortest path: BellmanFord Algorithm, Dijkstra’s algorithm. All-pairs shortest path: Floyd-Warshall Algorithm.</p>
                        
                        <p><strong>Minimum Spanning Trees: </strong>Prim’s algorithm. Kruskal’s algorithm.</p>
                        
                        <p><strong>Dynamic Programming: </strong>Introduction. Three examples’ World Series, Making Change, Longest Common Subsequence.</p>
                        
                        <p><strong>Greedy Algorithms: </strong>Introduction. Fractional Knapsack, Activity selection.</p>
                        
                        <p><strong>Computational Geometry: </strong>Introduction, basic operations, convex hulls, Graham scan, Jarvis’s march.</p>
                        
                        <p><strong>NP-Completeness: </strong>Intro to computational complexity theory. Reductions. Proofs of NPcompleteness. Examples, SAT, 3-SAT, Clique.</p>
                        <strong>Approximation Algorithms: </strong>Vertex cover, Graph Coloring.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        Introduction to Algorithms, Thomas H. Cormen, The MIT Press<br><br>`
                    },
                    {
                        code: "**304",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "BBCASEHC305",
                        title: "Programming in Python",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <strong>Overview of Programming:</strong><br>
                        <br>
                        Structure of a Python Program, Elements of Python.<br>
                        <br>
                        <strong>Introduction to Python</strong><br>
                        <br>
                        Python Interpreter, Using Python as Calculator, Python Shell, Indentation. Atoms, Identifiers and Keywords, Literals, Strings, Operators (Arithmetic, Relational, Logical, Boolean, Assignment, Ternary, Bitwise, Increment, Decrement).<br>
                        <br>
                        <strong>Creating Python Programs :</strong><br>
                        <br>
                        Input and Output Statements, Control Statements (Branching Statements, Looping Statements, Conditional Statements, exit function, Difference among break, continue and pass), Defining Functions, Default Arguments.<br>
                        &nbsp;<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. T. Budd, Exploring Python, TMH, 1st Edition, 2011.<br>
                        2. Allen Downey, Jeffrey Elkner, Chris Meyers, How to Think Like a Computer Scientist: Learning with Python.<br>
                        3. https://docs.python.org/3/<br>
                        4.http://www.ibiblio.org/g2swap/byteofpython/read/<br><br>`
                    },
                ]
            },
            {
                sem: "Fourth Semester",
                subjects: [
                    {
                        code: "BBCACCHC401	",
                        title: "Database Management System",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        Concepts of Data Base System.<br>
                        Data Modelling using the Entity Relationship Model.<br>
                        Relational Model - Definition &amp; Properties.<br>
                        Relational Algebra.<br>
                        SQL and PL/SQL.<br>
                        Functional Dependency, Multivalued Dependency, Join dependency.<br>
                        Database Design &amp; Normalization.<br>
                        Database storage structure, Indexing, Hashing.<br>
                        Database Security, Authorization, Integrity, Recovery.<br>
                        Introduction to Distributed Database, Cloud database.<br>
                        Concepts of Data Mining &amp; Data Warehousing-Definition, Characteristic &amp; Application<br>
                        Study and use of ORACLE relational database system.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1.Database System Concepts-Abraham Silberschatz,Henry F.Korth,S.Sudarshan(MC Graw Hill)<br>
                        2.Database Systems-Ramez Elmasri,Shamkant B.Navathe (Pearson)<br>
                        3.SQL/PLSQL-Ivan Bayross((BPB Publication)<br><br>`
                    },
                    {
                        code: "BBCACCHC402",
                        title: "Microprocessor - 8085",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Introduction to Microprocessor, Components of a Microprocessor: Registers, ALU and control &amp; timing, System bus (data, address and control bus), Microprocessor systems with bus organization.</p>
                        
                        <p>Microprocessor Architecture and Operations, Memory, I/O devices, Memory and I/O operations.</p>
                        
                        <p>8085 Microprocessor Architecture, Address, Data And Control Buses, 8085 Pin Functions, Demultiplexing of Buses, Generation Of Control Signals, Instruction Cycle, Machine Cycles, T-States, Memory Interfacing.</p>
                        
                        <p>Assembly Language Programming Basics, Classification of Instructions, Addressing Modes, 8085&nbsp;Instruction Set, Instruction And Data Formats, Writing, Assembling &amp; Executing A Program,&nbsp;Debugging The Programs.</p>
                        
                        <p>Writing 8085 assembly language programs with decision, making and looping using data transfer, arithmetic, logical and branch instructions.</p>
                        
                        <p>Stack &amp; Subroutines, Developing Counters and Time Delay Routines, Code Conversion, BCD Arithmetic and 16-Bit Data operations.</p>
                        
                        <p>Memory Address Decoding, Cache Memory and Cache Controller, I/O Interfacing, Keyboard Interfacing, Display Interfacing, Timers, Subroutine Calls and Interrupts, Interrupt Controller, DMA Controller, Video Controller, Communication Interfaces.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. R. Gaonkar, Microprocessor Architecture, Programming, and Applications with the 8085, Penram.<br>
                        2. A. Pal, Microprocessors: Principles and Applications, Tata McGraw Hill.<br>
                        3. Barry B. Brey: The Intel Microprocessors: Architecture, Programming and Interfacing. Pearson<br>
                        Education, Sixth Edition, 2009.<br><br>`
                    },
                    {
                        code: "BBCACCHC403",
                        title: "Object Oriented Programming using JAVA",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Introduction: </strong>JAVA as internet language. A first simple program. Entering the program, Compiling the program, control statements, using blocks of code, lexical issues-white space, identifiers, literals, comments, separators, The Java keyword-The java class libraries, data types, variables and arrays, the simple types, integers-byte, short, int, long, floating point types-float, double, characters, Booleans. A closer look at literals-integer literals, floating point literals, Boolean literals, character literals, string literals, variables – declaring a variable, dynamic initialization, the scope and lifetime of variables, type conversion and casting – java’s automatics conversions, casting incompatible types, automatic type promotion in expressions, the type promotion rules, arrays-one dimensional arrays, multidimensional arrays, alternative array declaration syntax. Operators-assignment operators, increment and decrement, the bitwise operators, relational operators, Boolean logical operators, the assignment operator, the ? operator, operator precedence, using parentheses, control statements-Java’s selection statements, if, switch, interaction statements-while, do-while, for, some for loop variations, nested loops, jump statements-using break, using continue, return.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Introduction Classes: </strong>class fundamentals, the general form of a class, a simple class, declaring objects, a closer look at new, assigning object reference variables, introducing methods, adding a method, the box class, returning a value, adding a method to the box class, constructors, parameterized constructors, the this keyword, instance variable hiding, garbage collection, the finalize method, a stack class, a closer look at methods and classes, overloading methods, overloading constructors. Using object as parameters, argument passing, returning objects, introducing access control, understanding static, introducing final, arrays revised., exploring the string class, using command line arguments, inheritance, inheritance basics, a more practical example, a superclass variable can reference a subclass object, using super, using super to call superclass constructors, a second use for super, creating a multilevel hierarchy, when constructor are called, method overriding, dynamic method dispatch, overridden methods, applying methods overriding, using abstract classes, using final with inheritance, using final to prevent overriding, using final to prevent inheritance, the object class.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Package and interfaces: </strong>Defining a package, understanding class path, a short package example, access protection, an access example, importing packages- interface-defining an interface, implementing interfaces, applying interfaces, variables in interfaces, interface can be extended.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Exception Handling: </strong>Exception fundamentals, exception types, uncaught exceptions, using try and catch, displaying a description of an exception, multiple catch clauses, nested try statements, throw, throws, finally, java’s built-in exceptions-creating you own exception subclasses, using exceptions, multithreaded programming.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Threads: </strong>The java’s thread model, thread priorities, synchronization, message, the thread class and the runnable interface, the main thread, creating a thread, implementing runnable, extending thread, closing an approach, creating multiple thread, thread priorities, synchronization, using synchronized methods, the synchronized statement, interthread communication, using multithreading.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Applets: </strong>Concept, and use of applet, I/O basics, streams, applet fundamentals, writing simple applet program.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Stream classes: </strong>The predefined streams, reading console input, writing console output, reading and writing files, the transient and volatile modifiers, using instance of native methods, problem with native methods.</p>
                        
                        <p><strong>String handling: </strong>The string constructor, string length, special string operations-string literals, string&nbsp; concatenation, string concatenation with other data types, string conversion, character extraction, string comparison, searching strings, modifying a string-data conversion using string buffer constructors.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Wrappers: </strong>Number, double and float, integer and long, character, Boolean, process, runtime, memory management, executing other programs, system-using current time limits to time, program execution, using array copy, environment properties, object, using clone and the cloneable interface, class, class loader, math-transcendental functions, exponential functions, rounding functions, miscellaneous math methods, classes, input stream, output stream file input stream, file output stream.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        Programming with JAVA – E.Balagurusamy, TMH<br><br>`
                    },
                    {
                        code: "**404",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "BBCASEHT405",
                        title: "Computer Organization",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Introduction:</strong></p>
                        
                        <p>Function and structure of a computer, Interconnection of components.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Representation of Instructions Representation of Instructions:</strong></p>
                        
                        <p>Machine instructions, Operands, Machine instructions, Operands, Addressing modes, Instruction</p>
                        
                        <p>formats, Instruction sets, Instruction set architectures - CISC and RISC architectures.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Processing Unit:</strong></p>
                        
                        <p>Organization of a processor - Registers, ALU and Control unit, Data path in a CPU, Instruction cycle,</p>
                        
                        <p>Organization of a control unit - Operations of a control unit, Hardwired control unit,</p>
                        
                        <p>Microprogrammed control unit.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Memory Subsystem:</strong></p>
                        
                        <p>Semiconductor memories, Memory cells - SRAM and DRAM cells, Internal Organization of a memory</p>
                        
                        <p>chip, Organization of a memory unit, Cache memory unit - Concept of cache memory, Mapping</p>
                        
                        <p>methods, Organization of a cache memory unit, Fetch and write mechanisms, Memory management</p>
                        
                        <p>unit - Concept of virtual memory, Address</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Structured Computer Organisation : A.S. Tanenmbaum<br>
                        2. Computer System Architecture – M.M.Mano, PHI<br>
                        3. Computer Architecture and Organization-Hayes, McGrawHill International edn.<br>
                        4. Computer Organization, 4th Edn.-V.C.Hammacher &amp; Others, TMH<br><br>`
                    },
                ]
            },
            {
                sem: "Fifth Semester",
                subjects: [
                    {
                        code: "BBCACCHT501	",
                        title: "Theory of Computation",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Finite state Automata and regular languages</strong> – recognition of a language by an automation, equivalence of DFA and NFA, minimization of FA, equivalence of FAs pumping lemma for regularity, closure properties of regular sets.&nbsp;&nbsp;</p>
                        
                        <p><strong>Context – free languages and push – down automata</strong>: non-regular CFLs, closure properties of CFLs. Properties of grammars – emptiness, ambiguity, LL &amp; LR undecidable problems of CFLs. Compatibility:- Turing machines and its variants, Universal TMs, halting problem.</p>
                        Elements of Complexity Theory:- Space and time complexity, Ram programs and TMs.&nbsp;<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <ol>
                            <li>J. E. Hopcroft and J. D. Ullman - Introduction to Automata Theory, Lanuages and Computation.</li>
                            <li>H. R. Lewis and C. H. Papadimitriou - Elemetns of the Theory of Computation.</li>
                            <li>J. Stoy - Denotational Semantics.</li>
                            <li>Aho and Ullman - Introduction to Compiler Design.</li>
                        </ol>
                        <br><br>`
                    },
                    {
                        code: "BBCACCHC502",
                        title: "Internet & E-Commerce",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Introduction of Internet:</strong> Evolution of Internet, Concept of Internet and intranet, Applications of Internet, Types of Connectivity such as dial – up, leased, VSAT, etc. Internet Server and Clients module in various Operating System, TCP/IP, Introduction to RFC. Addressing in Internet – IP and Domains, major features of IP, IP Datagram, major IP services, IP source routing. Value of the transport layer, TCP, major features of TCP, passive and active operation, Internet Service Providers.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>E-mail and List-servers:</strong> E-mail Networks, E-mail protocols (X.400, SMTP, UUCP), Format of an E-mail message, Description of E-mail Headers, E-mail contents and encoding, e-mail routing, List servers, E-mail clients, POP-3, IMAP-4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>File Transfer Protocol:</strong> Introduction to FTP, public domain Software, Types of FTP Servers. FTP clients. Common Commands.&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Telnet:</strong> Telnet protocol, Server daemon. Telnet clients, Terminal emulation.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Usenet and Internet Relay Chart Introduction to World Wide Web:</strong> Evolution of WWW, Basics Features, WWW Browsers, WWW servers, HTTP &amp; URL’s.&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>WWW Browsers:</strong> Basic features, Bookmarks, Progress indicators Personalization of Browsers, Printing displayed pages and forms, Saving Web pages, Netscape Communicators, Internet Explorer.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Web Publising: </strong>Technology Overview, Web site planning, where to host your web site, multiple sites on one server, maintaining a Web Site, Publishing tools.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>HTML:</strong> Document overview, Header elements, Section headings, Block oriented elements, Lists, Inline elements, Visual Mark-up, Hypertext links, Uniform Resource Locators (URL’s), Images, Forms, Tables, Special characters.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Interactivity Tools: CGI, ActiveX, VB-Script, Java Script and Java.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Multimedia and Graphics: VRML.&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Search Engines: Technology overview, Popular Search Engines, How to register a Web site on search engines.&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Internet Security: Overview of Internet Security threats, Firewalls, Introduction to AAA. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        E-commerce: Introduction to E-commerce, Payment Methodology, Security aspects, Standard in electronic payment. E-commerce and Banking, E-commerce and Retailing.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <ol>
                            <li>Internetworking with TCP/IP – by D. E. Comer, PHI.</li>
                            <li>Ecommerce – Paul A. Murphy, TMH.</li>
                        </ol>
                        <br><br>`
                    },
                    {
                        code: "**503",
                        title: "**One from pool of Discipline Specific Electives",
                        content: null
                    },
                    {
                        code: "**504",
                        title: "**One from pool of Discipline Specific Electives",
                        content: null
                    },
                ]
            },
            {
                sem: "Sixth Semester",
                subjects: [
                    {
                        code: "BBCACCHC601	",
                        title: "Web Technology",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Introduction to Web Technologies: </strong>Introduction to Web Technologies<strong>, </strong>How the Website Works?,<strong> </strong>Client and Server Scripting Languages<strong>, </strong>Types of Websites (Static and Dynamic Websites).</p>
                        
                        <p><strong>HTML Programming</strong></p>
                        
                        <p><strong>Introduction:</strong> Introduction to HTML, A simple HTML Document, HTML Tags, HTML Page Structure.<br>
                        <strong>Basics of HTML:</strong> Head, Body, Colours, Attributes, Lists (Unordered and Ordered).<br>
                        <strong>Links:</strong> Introduction to Links, Relative and Absolute Links, Link Attributes, ID Attribute.<br>
                        <strong>Images:</strong> Putting an Image on a Page, Using Images as Links, Putting an Image in the Background.<br>
                        <strong>Tables:</strong> Creating a Table, Table Headers, Captions, Spanning Columns, Styling Tables.<br>
                        <strong>Forms:</strong> Form Elements, Input Types, Input Attributes, Styling Forms with CSS.</p>
                        
                        <p><strong>PHP Programming :</strong>Origin and Use of PHP, Overview of PHP, General Syntactic Characteristics, Operators-Operations and Expressions, Control Statements, Arrays, Functions, Strings and Pattern Matching, Form Handling, Files, Cookies, Session Tracking, Simple programs in PHP.</p>
                        
                        <p><strong>Database Connection with MySQL:</strong> Data Insertion, Extraction, Deletion and Update.</p>
                        
                        <p><strong>Java Script: </strong>Introduction to Client Side Scripting, Introduction to Java Script, Variables in JS, Operators in JS, Conditional and Looping Statement, JS Popup Boxes (Alert, Prompt, Confirm).</p>
                        
                        <p><strong>AJAX: </strong>Overview of Ajax, Basics of Ajax, Ajax Call, Web form handling using Ajax and php.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <p>1. Virginia DeBolt, Integrated HTML and CSS A Smarter, Faster Way to Learn Wiley/Sybex, 2006.</p>
                        
                        <p>2. Cassidy Williams, Camryn Williams, Introduction to HTML and CSS, O’Reilly, 2015.</p>
                        
                        <p>3. Steven Holzner, “PHP: The Complete Reference Paperback”, McGraw Hill Education (India), 2007.</p>
                        
                        <p>4. David Sklar, Adam Trachtenberg, “PHP Cookbook: Solutions &amp; Examples for PHP Programmers”, 2014.</p>
                        
                        <p>5. Pankaj Sharma, Introduction to Web Technology, Katson Books, New Delhi, 2008</p>
                        <br><br>
                        `
                    },
                    {
                        code: "BBCACCHS602",
                        title: "Project Work",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Project work can be -<br>
                        1. Stand Alone Application<br>
                        2. Web Based Application<br>
                        3. Mobile App</p>`
                    },
                    {
                        code: "**603",
                        title: "**One from pool of Discipline Specific Electives",
                        content: null
                    },
                    {
                        code: "**604",
                        title: "One from pool of Discipline Specific Electives",
                        content: null
                    },

                ]
            },
            {
                sem: "Discipline Specific Electives",
                subjects: [
                    {
                        code: "BBCADSHC**",
                        title: "Computer Graphics",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Display devices:</strong> Raster, vector devices; color display techniques, color look up tables.</p>
                        
                        <p><strong>2-D graphics:</strong> Line and curve generation algorithm; polygon filling; 2-D transformations; Windowing and clipping.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Interactive graphics:</strong> Interactive input devices; Interaction handling.</p>
                        
                        <p><strong>3-D graphics:</strong> 3-D surface modeling; 3-D transformations; Hidden line and surface elimination; Rendering of 3-D objects.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Graphics Languages:</strong> GKS, PHIGS.</p>
                        
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        
                        <p><strong>Multimedia</strong><strong>:</strong></p>
                        Introduction to multimedia hardware, Networking, software applications, Environment, CD-Rom, WORM Optical Drivers, Flat panel Displays, Non Temporal Media-Text, Hypertext, Images, Image operations, CCD Cameras, Scanners, Frame Grabbers, Formats, Audio Digital Audio, Wave files, Music, MIDI, Graphics Animation – Tweeking, Morphing, Simulating Acceleration, Motion specification, Video – Analog Video: Operations, Digital Video, Compression, MPEG, JPEG, operation, Multimedia Authoring Systems.<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <br><br>`
                    },
                    {
                        code: "BBCADSHT**",
                        title: "Software Engineering",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Software Engineering Fundamentals: </strong>Definition of software product, Software Engineering Paradigms, Software engineering, Knowledge engineering, and End user development approaches.</p>
                        
                        <p><strong>System Analysis:</strong> An abstraction, Partitioning and projection, system development life cycle, various phase-study Systems specification, software requirements Specification (SRS) standards, formal specification methods, specification tools, Flow based, Data based and Object Oriented Analysis.</p>
                        
                        <p><strong>Systems Documentation:</strong> Principles of system documentation, types of documentation and their importance.</p>
                        
                        <p><strong>System Planning:</strong> data and fact gathering techniques – Interviewing, communications, presentations and site visit. Feasibility study, feasibility reports, prototyping, Cost-benefit analysis – Tools and Techniques.</p>
                        
                        <p><strong>Systems Design:</strong> Idealized and constrained design process modelling, logical and physical design, design representation, system Flowcharts and structured charts, DFD and ERD for data modelling, Object oriented design (Booch approach), cohesion and Coupling, Design matrices, Design documentation standard.</p>
                        
                        <p><strong>Role of Case Tools:</strong> Relevance of CASE tools, High-end and Low-end CASE Tools.</p>
                        
                        <p><strong>Coding and Programming:</strong> choice of programming languages, Mixed language programming and cell semantics, Re-engineering legacy systems, Coding standard.</p>
                        
                        <p><strong>Software Quality and testing:</strong> software quality assurance, Types of Software Testing (White Box and Black Box Testing, Unit testing, Integration Testing, Verification and Validation of Software), Debugging and Software Reliability analysis, Software quality and matrices, software maturity model and extensions.</p>
                        
                        <p><strong>Software Cost and Time estimation:</strong> functions points, issues in software cont estimation; Introduction to the Rayleigh curve, algorithmic cost models (COCOMO), other approaches to software cost and Sixe estimation (software complexity, Delphi, costing by analogy).</p>
                        
                        <p><strong>Software Project Management:</strong> Planning software, projects, Work breakdown structures, Integrating software design and Project planning, software project teams, Projecting monitoring and control.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Software Engineering, A preactionar's Approach: R. S. Pressman (Mc-Graw Hill Inc).<br>
                        2. An Integrated Approach to Software Engineering: P. Jalote (Narosa Publishing House)<br><br>`
                    },
                    {
                        code: "BBCADSHC**",
                        title: "Numerical Methods",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Numerical Methods and Algorithms Solution of non-linear equations: Bisection, Newton-Raphson, Regular-Falsi and Secant method. Interpolation and approximation- Lagrange Interpolation, Newton’s Forward Interpolation and Newton’s backward Interpolation methods.</p>
                        
                        <p>Integration: Trapizoidal and Simpson’s 1/3 rules.</p>
                        
                        <p>Solution of linear equations: Gaussian elimination, Gauss Sheidal method Solution of different equations; Eular’s, Taylor’s series, Runge-kutta (order-2)</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <p>1. C Language and Numerical Methods C Xaviers, New Age International</p>
                        
                        <p>2. Fundamentals of Statistics – Goon, Gupta, DasGupta</p>
                        <br><br>`
                    },
                    {
                        code: "BBCADSHT**",
                        title: "Artificial Intelligence",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <ol>
                            <li><strong>Introduction</strong> – What is AI-Importance of AI-Objectives. Applications of AI in Natural Language Processing. Speech Understanding, Computer Vision, Planning. etc.</li>
                            <li>&nbsp;</li>
                            <li><strong>Introduction to LISP:</strong> Study of features and its application.</li>
                            <li><strong>Knowledge and AI Problem solving concepts</strong> – Its representation, Organisation- Manipulation and Acquisition. Predicate Calculus in AI – First Order Predicate Logic &amp; its use in Knowledge Representation-Resolution Principle. Use of Resolution in reasoning and Question answering. Production Systems and Search Stragegises-Production System and its variants-Heuristic Search Methods.</li>
                            <li>&nbsp;</li>
                            <li><strong>Uncertainty Management</strong> – Fuzzy Logic, Bayesian inferencing, certainty factor. Structured Representation of Knowledge – Semantic Networks, Frames, Conceptual Dependency &amp; Scripts.</li>
                            <li>&nbsp;</li>
                            <li><strong>Learning:</strong> learning automation, learning by induction, Neural Networks, Genetic Algorithms.</li>
                            <li><strong>Expert System</strong> – Rule Based System Architecture, Non-production System Architecture, Knowledge Acquisition Methods, Explanation Methods, Expert System Shells.</li>
                        </ol>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <ol>
                            <li>Intro. to A.I. &amp; E.S. by D. W. Patterson, PHI.</li>
                            <li>Principle of A.I., by N.J. Nilson, Narosa.</li>
                        </ol>
                        <br><br>`
                    },
                    {
                        code: "BBCADSHT**",
                        title: "Advance Operating System",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Unit 1:</strong></p>
                        
                        <p>Introduction: Distributed Computing Systems, Distributed Computing System Models, Advantages of Distributed Systems, Distributed Operating Systems, Issues in Designing Distributed Operating Systems.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 2: </strong></p>
                        
                        <p>Message Passing: Introduction, Issues in IPC by Message Passing, Synchronization, buffering, Process Addressing, Failure Handling, Group Communication.</p>
                        
                        <p>Remote Procedure Calls: The RPC Model,Implementation of RPC Mechanism, RPC Messages.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 3:</strong></p>
                        
                        <p>Distributed Shared Memory: Distributed Shared Memory Systems (DSM), DSM – Design and Implementation Issues, Granularity – Block Size, Structure of Shared Memory Space in a DSM System, Centralized – Server Algorithm, Fixed Distributed – Server Algorithm, Dynamic Distributed Server Algorithm, Thrashing.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 4:</strong></p>
                        
                        <p>Synchronization: Introduction, Clock Synchronization, Clock Synchronization Algorithms, Distributed Algorithms, Event Ordering, Mutual Exclusion, Deadlock.</p>
                        
                        <p>Resource Management: Introduction, Desirable Features of a Good Global Scheduling Algorithm, Task assignment Approach, Load – Sharing Approach.</p>
                        
                        <p>Process Management: Introduction, Process Migration, Threads.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 5:</strong></p>
                        
                        <p>Distributed File Systems: The Key Challenges of Distributed Systems, Client’s Perspective: File Services, File Access Semantics, Server’s Perspective Implementation, Stateful Versus Stateless Servers.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <ol>
                            <li>Silberschatz, Galvin, Gagne, Operating System Concepts, WSE Wiley</li>
                            <li>Tanenbaum, Woodhull, Operating Systems Design and Implementation, PHI</li>
                        </ol>
                        <br><br>`
                    },
                    {
                        code: "BBCADSHT**",
                        title: "Advance DBMS",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Unit 1:</strong></p>
                        
                        <p>Distributed Database Introduction: Distributed DBMS features and needs.Reference architecture.Levels of distribution transparency, replication.Distributed database design - fragmentation, allocation criteria.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 2:</strong></p>
                        
                        <p>Query Optimization &amp; Concurrency Control: Storage mechanisms. Translation of global queries / Global query optimisation. Query execution and access plan. Concurrency control.Distributed deadlocks. Time based and quorum based protocols, Comparison.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 3:</strong></p>
                        
                        <p>Object Oriented Database: OO paradigm.</p>
                        
                        <p>OO data models: Object identifiers, Relationship and Integrity, ER Diagramming model for OO relationships, Object relational data models.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 4:</strong></p>
                        
                        <p>Concepts of Data Warehousing&amp; Data mining: Data warehousing – definitions and characteristics, Multi-dimensional data model, Warehouse schema.Building of a Data Warehousing, Architectural strategies.Tools for Data Warehousing.Data Mining Definitions; KDD (Knowledge Discovery database) versus Data Mining; DBMS versus Data Mining, Data Mining Techniques.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 5: </strong></p>
                        
                        <p>Clustering Techniques : Clustering paradigm, K-Means Algorithm, Partition algorithms, CLARA, CLARANS; Hierarchical clustering, DBSCAN; Categorical clustering, STIRR, ROCK, CACTUS.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit 6:</strong></p>
                        
                        <p>Decision Trees: Tree construction principle, Best split, Splitting indices, Splitting criteria, Decision tree construction with pre-sorting.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <ol>
                            <li>S Ceri, G Pelagatti; ""Distributed Databases: Principles and Systems"; Tata McGraw-Hill Publishing Company Limited.</li>
                            <li>&nbsp;M Tamer Ozsu, P Valduriez; "Principles of Distributed Database Systems"; Pearson Education Pvt. Ltd.</li>
                            <li>J. L. Harrington; "Object Oriented Database Design Clearly Explained"; Morgan Kaufmann Publishers.</li>
                        </ol>
                        
                        <p>&nbsp;</p>
                        <br><br>`
                    },

                ]
            },
            {
                sem: "Generic Elective Courses",
                subjects: [
                    {
                        code: "BBCAGEHT**",
                        title: "Mathematics-I",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Algebra: Sets, Union and Intersection, Complement, Mapping, Composition, notion of a Group, Ring , Field with simple examples.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Complex Number: Modulus and amplitude, De Moiver’s theorem</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Polynomials, Division algorithm, Fundamental theorem of classical algebra (Proof not required), Descartes rule of sign and their application, Relation between roots and coefficients; symmetric function of roots, Transformation of polynomial equation, Cardon's solution of cubic equation, Determinants, Addition and Multiplication of Matrices, Inverse of a Matrix ; Solution of linear equations in three variables by Cramer's rule and solution of three line linear equations by matrix inversion methods.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>&nbsp;Vector spaces, Subspaces, Bases and Dimensions, Co-ordinates, Linear Transformation, The Algebra of Linear Transformations.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Vector Algebra: Scalars &amp; vectors, vector addition, linear combination of vectors, condition of colinearity of three points, scalar and vector products, scalar triple product and vector triple product.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Analytical Geometry: Translation and rotation of rectangular axes, invariants, general equation of second degreereduction to standard forms and classification. Plane polar equation of a straight line, circle, ellipse, parabola and hyperbola.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <p>1. A Text book of Algebra- B.K. Lahiri &amp; K. C. Roy</p>
                        
                        <p>2. Linear Algebra- Das &amp; Roy</p>
                        
                        <p>3. Co-ordinate Geometry- S. L. Loney</p>
                        
                        <p>4. Differential Calculus- Das and Mukherjee</p>
                        
                        <p>5. Integral Calculus - Das and Mukherjee</p>
                        <br><br>`
                    },
                    {
                        code: "BBCAGEHT**",
                        title: "Mathematics - II",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Differential Calculus: Limit of a function and continuity. Fundamental properties of continuous functions (proofs not required); Derivative and Differential-Geometric meaning, Rules of Differentiation. Successive dirrerentiation. Rolle’s theorem, Mean-Value theorems, Taylor’s and Maclaurin’s theorems with Cauchy’s and Lagrange’s forms of remainder; Taylor’s series. Functions of several variables. Partial Derivatives. Total Differential. Euler’s theorem on homogeneous functions of two variables. Application to plane curves.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Integral Calculus: Rules of Integration of Indefinite Integrals, Solution of Definite Integrals and their elementary properties. Idea of improper integrals.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Differential Equations: order, degree, solution and formation of a differential equation. Standard techniques of solving a linear differential equation with constant coefficients. Cauchy's and Ligendre's Liner Differential Equations with variable coefficients.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Sequence and Series: Bounded and unbounded sequences, Convergence or divergence of a sequence, Behavior of monotone sequences, Algebra of convergent sequences, Cauchy sequence, Cauchy's general principle of convergence, Infinite series, it's convergence and sum, series with positive terms and standard tests of convergence (without proofs), Alternating Series, Leibniz Test, Absolute convergence, Rearrangement of absolutely convergent series, Test of convergence of Abel and Dirichlet (without proofs)</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <p>1. Differential Equations - Sheplay I. ( John Wiley &amp; Sons, Inc )</p>
                        
                        <p>2. Linear Algebra - Kenneth Hoffman &amp; Ray Kunze ( PHI )</p>
                        
                        <p>3. Mathematical Analysis - S. C. Malic ( Wiley Eastern Limited )</p>
                        
                        <p>4. Differential Calculus – Das and Mukherjee</p>
                        
                        <p>5. Integral Calculus – Das and Mukherjee</p>
                        <br><br>`
                    },
                    {
                        code: "BBCAGEHT**",
                        title: "Introduction to Accounting & Costing",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        Basic Accounting and Conventions underlying preparation of Financial statements (balance sheet<br>
                        highlighting accounting process, basic accounts, trial balance and financial statements, issue such as<br>
                        provisions for bat debts tax, dividends, losses such as bad debts, missing information, classification<br>
                        effects, cost of assets, rentals etc.), income measurement (revenue; recognition and matching costs<br>
                        and revenues; inventory valuation);depreciation accounting; intangible assets accounting;<br>
                        understanding published annual accounts including fund flow statements. [50%]<br>
                        Basic Cost Concepts (Introduction; Cost Classification; Allocation, Appointment and Absorption; Cost<br>
                        Centres); Cost Analysis for Managerial Decisions (Direct Costing, Break-Even Analysis; Relevant Fixed<br>
                        Costs and Sunk Costs). Cost Analysis for Control (Standard Costing; Variences; Material, Labour;<br>
                        Overhead, Sales and Profit) [25%]<br>
                        Standard Cost accounting (Budgeting and Control; Elements of Budgeting; Control of Manufacturing<br>
                        and Manufacturing Expenses; Performances Appraisal, Evaluation of Cost Control Systems). [25%]<br>
                        <h3 style=" color:#030">Reading References:</h3>
                        Yet to be enlisted<br><br>`
                    },
                    {
                        code: "BBCAGEHT**",
                        title: "Management Information System",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p><strong>Unit-I:</strong></p>
                        
                        <p>Introduction – Definition of Data and Information; Differences between Data and Information; Characteristics of Information; Definition of System; Characteristics of System; Definition of Information System; Role of Information Systems at different level, Strategic level.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit-II:</strong></p>
                        
                        <p>Management Information System and Management Processes – Definition of MIS; Role of MIS in an Organization; Processes of Management; Role of MIS in Planning, Organizing activity, Staffing, Directing and Controlling.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit-III:</strong></p>
                        
                        <p>Major Information Systems of an Organization –TPS (Transaction processing System), MIS (Management Information System), DSS (Decision Support System), ESS (Executive Support System) – definition, functions, Characteristics and benefits; Distinction between MIS and DSS.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit-IV:</strong></p>
                        
                        <p>Introduction to Functional Information System – Marketing information System (MKIS) Manufacturing System (MFIS), Financial Information System (FIS), Human Resource Information System (HRIS) – functions, characteristics, brief description of each subsystem of above functional information system.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit-V:</strong></p>
                        
                        <p>Introduction to Database Management System – Definition of Database; Problems with Traditional File System; Concept of DBMS, Benefits of DBMS; Applications of DBMS in MIS; Types of databases; Concept of RDBMS; Important Terminology in RDBMS – Relation or table, tuple, attribute, cardinality, domain of attribute, keySuper key, Candidate key, Primary key.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit-VI:</strong></p>
                        
                        <p>Introduction to Computer Network – Introduction of Telecommunication; Computer network definition, benefits, competitive advantage; Technological foundation of Computer Network – Data transmission rate, transmission technology, Network Topology; Types of Network – LAN, WAN, MAN – feature, benefits; Transmission Media – Copper Coaxial cable, Twisted pair cable, Fiber optics, Radio transmission, Geostationary satellite; Basic concept of Network Protocol.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit-VII:</strong></p>
                        
                        <p>Enterprise Information System – Evolution of EIS; Enterprise Resource Planning (ERP) System – concept, architecture; Modules of ERP; How ERP improve company’s business performance; Benefits of ERP.</p>
                        
                        <p>&nbsp;</p>
                        
                        <p><strong>Unit-VIII:</strong></p>
                        
                        <p>E-Commerce &amp; E-Business – Introduction to E-Business; Models of E-Business – B2B, B2C, C2B and C2C; E-Commerce – definition, features, benefits and limitations; Concept of EDI (Electronic Data Interchange), Electronic Payment System, E-CRM, E-Governance.</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        1. Management Information System – Mahadeo Jaiswal &amp; Monika Mital; OXFORD University Press.<br>
                        2. Management Information System – W. S. Jawadekar; Tata McGrawHill Publishing Company.<br>
                        3. Management Information System – Dharminder Kumar &amp; Sangeeta Gupta; EXCEL Book.<br><br>
                        `
                    },

                ]
            },
            {
                sem: "AECC-MIL Courses",
                subjects: [
                    {
                        code: "BAECCLET**",
                        title: "EnglishCommunication",
                        content: `<h3 style=" color:#030">Syllabus:</h3>
                        <p>Introduction:</p>
                        
                        <p>1. Theory of Communication,</p>
                        
                        <p>2. Types and modes of Communication</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Language of Communication:</p>
                        
                        <p>1. Verbal and Non-verbal (Spoken and Written)</p>
                        
                        <p>2. Personal, Social and Business</p>
                        
                        <p>3. Barriers and Strategies</p>
                        
                        <p>4. Intra-personal, Inter-personal and Group communication</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Speaking Skills:</p>
                        
                        <p>1. Monologue</p>
                        
                        <p>2. Dialogue</p>
                        
                        <p>3. Group Discussion</p>
                        
                        <p>4. Effective Communication/ Mis-Communication</p>
                        
                        <p>5. Interview</p>
                        
                        <p>6. Public Speech</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Reading and Understanding:</p>
                        
                        <p>1. Close Reading Comprehension</p>
                        
                        <p>2. Summary Paraphrasing</p>
                        
                        <p>3. Analysis and Interpretation</p>
                        
                        <p>4. Translation(from Indian language to English and vice-versa) Literary/Knowledge Texts</p>
                        
                        <p>&nbsp;</p>
                        
                        <p>Writing Skills:</p>
                        
                        <p>1. Documenting Report Writing</p>
                        
                        <p>2. Making notes</p>
                        
                        <p>3. Letter writing</p>
                        <br>
                        <h3 style=" color:#030">Reading References:</h3>
                        <p>&nbsp;</p>
                        
                        <p>Fluency in English - Part II, Oxford University Press, 2006.</p>
                        
                        <p>Business English, Pearson, 2008.</p>
                        
                        <p>Language, Literature and Creativity, Orient Blackswan, 2013.</p>
                        
                        <p>&nbsp;</p>
                        <br><br>`
                    },

                ]
            },
        ],
        visible: false,
        selectedContent: {
            header: "Viewer",
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Topbar text={<span><i className="fas fa-book-open"></i> Syllabus</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>
                {
                    this.state.courses.map((item, index) => (
                        <div key={index}>
                            <h4 className="text-center text-muted">{item.sem}</h4>
                            <table className="table table-bordered  table-sm">
                                <thead className="table-light">
                                    <tr>
                                        <th className="text-center">Course Code</th>
                                        <th className="text-center">Course Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        item.subjects.map((subject, sindex) => (
                                            <tr key={sindex}>
                                                <td>{subject.code}</td>
                                                <td>
                                                    {
                                                        (subject.content) ?
                                                            <Button onClick={() => { this.setState({ visible: true, selectedContent: { header: subject.title, content: subject.content } }) }} style={{ padding: "0", fontSize: "12px", textTransform: "initial" }} color="primary">
                                                                {subject.title}
                                                            </Button>
                                                            : <span style={{ fontSize: "12px" }}>{subject.title}</span>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    ))
                }
                <Modal
                    visible={this.state.visible}
                    onClose={() => { this.setState({ visible: false }) }}
                    header={this.state.selectedContent.header}
                    style={{
                        width: "90%",
                        height: "90%",
                    }}
                    className=""
                >
                    <React.Fragment>

                        <br />
                        <div dangerouslySetInnerHTML={{ __html: this.state.selectedContent.content }} id="syllabus-viewer"></div>
                    </React.Fragment>
                </Modal>
            </div>
        )
    }
}
