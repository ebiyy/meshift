# ER Diagram for NutriPerform

以下は、NutriPerform（仮称）プロジェクトのデータベース設計概要です。摂取した栄養素とパフォーマンス記録を管理するためのエンティティとリレーションシップを示します。

```mermaid
erDiagram
    USER {
        int user_id PK
        string user_name
        string email
        date birth_date
    }
    
    FOOD {
        int food_id PK
        string food_name
        string description
    }
    
    NUTRIENT {
        int nutrient_id PK
        string nutrient_name
        string unit
    }
    
    FOOD_NUTRIENT {
        int food_id FK
        int nutrient_id FK
        float quantity_per_serving
    }
    
    INTAKE_RECORD {
        int intake_id PK
        int user_id FK
        int food_id FK
        date intake_date
        float serving_amount
    }
    
    PERFORMANCE_RECORD {
        int performance_id PK
        int user_id FK
        date record_date
        float metric_value
        string metric_type
    }
    
    USER ||--o{ INTAKE_RECORD : "摂取記録"
    FOOD ||--o{ INTAKE_RECORD : "使用食品"
    FOOD ||--o{ FOOD_NUTRIENT : "含む栄養素"
    NUTRIENT ||--o{ FOOD_NUTRIENT : "使われる"
    USER ||--o{ PERFORMANCE_RECORD : "パフォーマンス記録"
```

## エンティティの説明

- **USER**: ユーザ情報の管理（ユーザID、氏名、メールアドレス、生年月日）。
- **FOOD**: 摂取する食品の情報。食品名や詳細説明を含む。
- **NUTRIENT**: 栄養素情報。栄養素名や単位（g、mgなど）。
- **FOOD_NUTRIENT**: 食品と栄養素間の多対多のリレーションを解消するブリッジテーブル。サービングごとの栄養素量情報も管理。
- **INTAKE_RECORD**: 各ユーザがどの食品をどの量摂取したかを記録するテーブル。
- **PERFORMANCE_RECORD**: ユーザのパフォーマンス指標（例：体重、走行距離、持久力など）の記録。

このドキュメントを参考にデータベーススキーマやアプリケーション設計を進めてください。 