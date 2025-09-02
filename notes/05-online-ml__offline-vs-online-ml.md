# L05 - Online Machine Learning (Online Learning)

This video discusses the second type of machine learning model training in a production environment: **Online Machine Learning**.

## Introduction to Online Learning

-   Online Learning is a technique where a machine learning model **improves dynamically on the go on the server** with new data.
-   It's often promoted by companies who state that "the more you use our product, the more its performance will improve".
-   Unlike batch learning, training in online learning is done **incrementally**.
-   Data is fed to the model in **small batches or chunks (mini-batches)** sequentially.
-   **After each training step, the model improves**.
-   These small chunks of data are so tiny that the **entire training can be performed directly on the production server**, which is why it's called "online learning" – the model trains while it's "online".

## Online Learning Process Flow

1.  **Initial Training and Deployment**: Start with some initial data, train a machine learning algorithm, test it, and then deploy it to the server.
2.  **Continuous Data Stream**: On the server, there's a **continuous inflow of new data**.
3.  **Prediction and Learning (Simultaneously)**: The deployed model performs two main tasks:
    -   It **makes predictions** on the new incoming data.
    -   It **learns/trains dynamically** from this new data, continuously improving its performance.

-   **Key Difference from Batch Learning**: In batch learning, once trained, the model is static on the server for prediction. To update it, you take it offline for retraining. In online learning, the model **trains dynamically on the server** as new data arrives.

## Examples of Online Learning

-   **Chatbots**: Famous company chatbots like Google Now, Alexa, and Siri are good examples. They are deployed on servers, predict with new data, learn from it, and improve over time.
-   **SwiftKey Keyboard**: As you type on your Android phone, the keyboard's performance dynamically improves, suggesting it uses online learning.
-   **YouTube Recommendations**: When you scroll through YouTube, click on a video, and then return to the feed, the feed changes based on the video you just watched. This click-generated data helps the model learn and provide updated recommendations, indicating online learning.
-   Online learning is widely used in production today, and there's a **shift towards it** from batch learning.

## When to Use Online Learning (Advantages)

Online learning is suitable in several scenarios:

1.  **Concept Drift**:
    -   This is the most important use case.
    -   When the **nature of the problem or data changes rapidly over time** (e.g., customer behavior, trending topics, e-commerce preferences).
    -   Online learning allows the model to adapt quickly to these evolving concepts.
2.  **Cost-Effectiveness**:
    -   For very large-scale operations, batch learning can be more expensive.
    -   Online learning, by working with small chunks of data, can be **more cost-effective**. A research paper (link to be shared later) explains this cost-effectiveness.
3.  **Fast Solutions**:
    -   Training with small chunks of data is very fast, as prediction takes almost no time.
    -   It provides a solution for making your **system faster overall**.

## Implementation of Online Learning

-   **Scikit-learn (sklearn)**:
    -   Some algorithms in `sklearn` allow for incremental or online training.
    -   Examples include `SGDRegressor`, which is a variant of `Linear Regression`. It has a `partial_fit` method.
    -   The `partial_fit` method allows you to train the model with a subset of data and then continue training with more data later, incrementally.
    -   Training on a single data point can be extremely fast (e.g., 0.0003 seconds).
-   **Dedicated Libraries**:
    -   **River**: A Python library specifically designed for online machine learning on streaming data. It's a blend of two earlier libraries and is considered good for real-time data.
    -   **Vowpal Wabbit**: A very famous library also used for online machine learning and reinforcement learning.
-   Some other frameworks, like PyTorch and TensorFlow, also support online learning through their design.

## Key Concepts in Online Learning

1.  **Learning Rate**:
    -   This concept is crucial in online learning.
    -   It determines **how frequently the model trains** on incoming data.
    -   You don't want the model to change too rapidly (forgetting old knowledge) or too slowly (not adapting to new information).
    -   Setting the **correct learning rate is essential** for your business needs; an incorrect rate can lead to misbehavior or underperformance.
2.  **Out-of-Core Learning**:
    -   This applies when you have a **dataset so large that it cannot be loaded into memory at once** for training (e.g., 50GB dataset on a machine with 8GB RAM).
    -   In such cases, you **break the huge dataset into smaller chunks**.
    -   These chunks are then fed sequentially to the model for **incremental training**, similar to online learning techniques.
    -   While the technique is similar, out-of-core learning is typically **performed offline** on a large dataset that simply won't fit in memory, rather than necessarily for live, streaming data on a server.

## Problems and Risks of Online Learning

-   **Complexity and Difficulty**: Training models reliably on the fly on a server, especially with vast amounts of real-time data, is **challenging and an "art"**.
    -   Factors like learning rate, handling incoming data speed, and various other variables make it difficult to achieve perfect system performance.
-   **Lack of Enterprise-Grade Tools**: Many existing libraries are developed by individuals or groups, which means you **don't always get enterprise-grade assurance**. The technique is still relatively new and can be unstable.
-   **Risk of Data Contamination/Bias**:
    -   The model's behavior is directly dependent on incoming data.
    -   If there's **bad or malicious data** (e.g., server hack, incorrect requests), the model can become **highly biased**.
    -   This could lead to severe system malfunction.
-   **Mitigation Strategies**:
    -   **Active Monitoring System**: Implement robust monitoring to constantly watch the system.
    -   **Anomaly Detection Algorithms**: Use algorithms to detect anomalies in incoming data. Upon detection, the system should be designed to take action (e.g., take the system offline, reject the bad data).
    -   **Fallback Mechanism**: Always have a plan B. If the system gets corrupted, you should be able to **roll back to a previous, stable version** of the model and bring it back online.
    -   Careful implementation is critical, as online learning can easily go wrong.

## Batch Learning vs. Online Learning: Key Differences

| Feature            | Batch Learning (Offline)                                                                        | Online Learning                                                                                           |
| :----------------- | :---------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| **Complexity**     | Lower, simpler to train on a local machine.                                                     | Higher, involves real-time monitoring and dynamic training on server.                                     |
| **Computation**    | High during offline training, then low (only prediction).                                       | Continuous computation for training and prediction on server.                                             |
| **Implementation** | Easier for general applications.                                                                | Better suited for applications requiring continuous adaptation.                                           |
| **Applications**   | Ideal for problems where the "concept" doesn't change over time (e.g., dog/cat classification). | Ideal for problems with **concept drift** where data/patterns evolve rapidly.                             |
| **Tools**          | Well-established tools: scikit-learn, TensorFlow, PyTorch.                                      | Newer tools, many of which are from scikit-learn modules or dedicated libraries like River/Vowpal Wabbit. |

The discussion emphasizes that while beginners often focus solely on model accuracy, industry professionals must consider the end-to-end implications of deployment, including cost, server behavior, and data evolution.
