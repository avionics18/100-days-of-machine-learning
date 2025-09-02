# L06 - Instance-Based Vs Model-Based Learning

This video discusses a different categorization of machine learning model training based on **how the model learns or acquires knowledge**. Just as humans learn by either memorizing or understanding underlying principles, machine learning models also learn in two primary ways: memorizing data or generalizing from it.

## Introduction to Learning Mechanisms in Machine Learning

Machine learning models primarily learn in two ways:

1.  **Memorizing**: Holding onto the data points directly, much like rote learning. This is the basis for **Instance-Based Learning**.
2.  **Generalizing/Understanding Concepts**: Extracting underlying principles, patterns, or mathematical relationships from the data. This forms the foundation of **Model-Based Learning**.

The goal of this video is to help you identify whether a machine learning algorithm you encounter in the future is Instance-Based or Model-Based.

## Instance-Based Learning

-   **Core Idea**: In Instance-Based Learning, the algorithm **memorizes the entire training dataset**. It does not create an explicit model during a "training" phase.
-   **Process**:
    1.  The algorithm simply **stores all the training data points**.
    2.  When a **new, unseen data point** (a "query instance") arrives, the algorithm calculates its **similarity or distance** to all the stored training data points.
    3.  It then uses the characteristics of the **most similar (nearest) neighbors** from the training data to make a prediction or classification for the new point.
-   **Example (Placement Prediction)**:
    -   Given student data (IQ, CGPA, Placement: Yes/No).
    -   The algorithm plots all existing student data points on a graph (e.g., IQ vs. CGPA, with colors for Yes/No placement).
    -   When a new student's IQ and CGPA arrive (a "green point" in the example), the algorithm **finds the 'k' nearest existing student points** (e.g., 3 nearest neighbors).
    -   If two out of three nearest neighbors had placements ("red points"), the model predicts "Yes" for the new student.
-   **Key Characteristics**:
    -   **No explicit training phase**: The algorithm mostly sits idle, just storing data, until a new query arrives.
    -   **Focus on Similarity/Distance**: Predictions are based on how similar a new instance is to known instances.
    -   **"Lazy Learner"**: Often called lazy because it **postpones generalization** until a prediction is explicitly requested.
-   **Examples of Algorithms**:
    -   **K-Nearest Neighbors (KNN)**.
    -   RBF (Radial Basis Function) Networks (in certain contexts).
-   **Disadvantages/Problems**:
    -   **Storage-Heavy**: Requires storing **all training data**, which can be significant for large datasets (e.g., 1GB of data means 1GB of storage needed at all times).
    -   **Computationally Intensive at Prediction Time**: The entire dataset might need to be scanned to find neighbors for each new query, which can be slow.

## Model-Based Learning

-   **Core Idea**: In Model-Based Learning, the algorithm aims to **understand the underlying principles or patterns** within the training data by constructing a **mathematical function or model**.
-   **Process**:
    1.  During a dedicated **training phase**, the algorithm processes the training data to **learn a generalized rule or function**. This rule is typically represented by a set of **parameters**.
    2.  For classification problems, this often results in a **decision boundary**.
    3.  Once the model (the mathematical function or decision boundary) is learned, the **original training data is no longer strictly needed** for making predictions.
    4.  When a new data point arrives, the model uses its **learned function or decision boundary** to make a prediction.
-   **Example (Placement Prediction)**:
    -   Using the same student data (IQ, CGPA, Placement: Yes/No).
    -   The algorithm runs on the data to **learn a mathematical relationship** and then draws a **decision boundary** (e.g., a line or curve).
    -   This boundary separates students who are likely to get placed from those who are not.
    -   If a new student's point falls on one side of the boundary, the model predicts "Yes" placement; if on the other side, "No".
    -   The key is that **only the boundary (the model) is needed for future predictions**, not the individual student data points used to create it.
-   **Key Characteristics**:
    -   **Explicit Training Phase**: A distinct phase where the model learns the underlying patterns.
    -   **Generates a Model/Function**: The output of training is a generalized model, not the raw data.
    -   **Focus on Rules/Parameters**: Seeks to find a rule (e.g., an equation, a set of weights) that describes the data.
    -   **"Eager Learner"**: Generalizes rules **before** being presented with new instances.
-   **Examples of Algorithms**:
    -   **Linear Regression**.
    -   **Logistic Regression**.
    -   **Decision Trees**.
    -   Most machine learning algorithms fall into this category.
-   **Advantages**:
    -   **Less Storage**: Once the model is trained, only the model itself (the parameters or decision function) needs to be stored, which is usually **very small** compared to the entire dataset.
    -   **Fast Predictions**: Predictions for new instances are typically very fast because they only involve running the learned function, not scanning the entire training dataset.

## Key Differences: Instance-Based vs. Model-Based Learning

| Feature                | Model-Based Learning                                                                                                | Instance-Based Learning                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ |
| **Learning Process**   | **Generates an explicit model** (mathematical function, decision boundary) from data. Learns underlying principles. | **Stores training data directly**. Memorizes data.                                                      |
| **Training**           | Involves a distinct training phase to discover parameters/rules.                                                    | **No explicit training** in the traditional sense; just stores data. Postpones discovery until scoring. |
| **Data Storage**       | Stores the **learned model/parameters**, which is typically small.                                                  | **Requires storing all training data** permanently.                                                     |
| **Generalization**     | **Generalizes rules before scoring** new instances.                                                                 | **No generalization before scoring**; generalizes/predicts only at scoring time.                        |
| **Prediction Basis**   | Uses the **learned model** to make predictions.                                                                     | Compares new instance to **training data** to find similar neighbors.                                   |
| **Training Data Need** | **Training data can be discarded** after the model is built.                                                        | **Training data must always be kept** to make predictions.                                              |
| **Storage Usage**      | Requires **less storage**.                                                                                          | Requires **more storage** (storage-heavy).                                                              |

Both approaches require proper **data preparation**, including removing outliers and encoding categorical features, before the learning process begins. The ultimate purpose of this distinction is to help you understand the core mechanism of any machine learning algorithm you study.
