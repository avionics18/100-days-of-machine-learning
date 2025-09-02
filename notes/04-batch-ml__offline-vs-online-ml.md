# L04 - Machine Learning Types: Batch/Offline vs. Online Machine Learning

This video discusses two types of machine learning based on **how a machine learning model is trained in a production environment**.

## What is a Production Environment?

-   **Production** is the server environment where your code, including machine learning software, runs for customers.
-   When you develop code, it runs in a **development environment** on your local machine. Once complete, it's deployed to a server for users to access.

## Two Types of Machine Learning based on Training in Production:

1.  **Batch Machine Learning (Offline Learning)**
2.  **Online Machine Learning**

---

## Batch Learning (Offline Learning)

-   **Definition**:
    -   The **conventional way of training** a machine learning model.
    -   You use the **entire dataset at once** to train the model.
    -   There is **no incremental training**; you train with the whole batch of data.
-   **Process**:
    1.  **Offline Training**: Data scientists or ML engineers train the model **offline on their own machines** using the complete dataset. This is done offline because large datasets would be too costly and time-consuming to train on a server.
    2.  **Deployment**: Once the model is trained and tested, the **learned model is deployed to a production server**.
    3.  **Inference**: The model then runs on the server, making predictions or recommendations whenever a user provides data.
-   **Example**:
    -   Training a Netflix recommendation engine on all available movies on your local machine, then deploying it to Netflix's servers to suggest movies to users.
-   **Core Problem / Disadvantage**:
    -   The model becomes **static once deployed**.
    -   Business scenarios and data **evolve over time** (e.g., new movies are added, new spam techniques emerge).
    -   A static model **will not incorporate new data or evolving patterns**, leading to outdated recommendations or classifications.
    -   This makes the system **obsolete** if not updated.
-   **The Solution: Retraining**:
    -   To combat obsolescence, models need to be **retrained periodically**.
    -   **Process**:
        1.  Collect **new, updated data**.
        2.  **Merge the new data with old data**.
        3.  **Retrain the model** using this combined dataset.
        4.  **Test** the retrained model.
        5.  **Redeploy** the updated model to the server.
    -   This retraining process typically happens in **cycles** (e.g., every 24 hours, weekly, monthly, or every six months), depending on the amount of data and the speed required for updates.
-   **Disadvantages of Batch Learning**:
    1.  **Large Data Volume Limitations**:
        -   If the dataset grows **too large**, existing training tools or hardware may **not be able to process the entire chunk of data at once**.
        -   Training on an excessively large dataset can cause the code to crash or fail.
    2.  **Hardware Limitations / Connectivity Issues**:
        -   Batch learning **fails in scenarios where there's no instant connectivity** to the model.
        -   **Examples**:
            -   Military applications used in remote areas (like Ladakh) without internet access; the model on a device cannot be updated until connectivity is restored.
            -   Machine learning software on a satellite or a train in an unknown location; frequent updates are impossible without communication channels.
    3.  **Data Availability / Timeliness**:
        -   Updates are **not real-time**; they occur only after the predefined retraining period (e.g., 24 hours).
        -   This creates issues with **rapidly evolving, time-sensitive events**.
        -   **Example**:
            -   A social networking site uses a batch-trained model (24-hour update cycle) to show trending stories based on user interests.
            -   If a major, unexpected news event (like demonetization) breaks, users will be interested immediately, but the model cannot reflect this new interest until the next 24-hour update cycle.
            -   By the time the model updates, the initial urgency and relevance of the news might have passed, filling the feed with outdated "trending" topics.
-   **Conclusion on Batch Learning**: While widely used in many scenarios, **Batch Learning is not suitable for all situations**, especially those requiring real-time adaptability or where connectivity is an issue. This leads to the need for online learning.
