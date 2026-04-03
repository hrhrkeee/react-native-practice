---
name: drawio-editing
description: Draw.io図（.drawio XML）の編集・管理手順を定義する。正本/exportの二層構造管理、XML編集ルール、妥当性チェックを提供する。図の新規作成・更新が必要な場合に使用する。
---

# drawio-editing Skill

Draw.io 図の編集・管理スキル。`.drawio` 正本の XML 編集と `.drawio.svg` エクスポートの管理を行う。

## 前提

- 正本は `documents/architecture/diagrams/source/` に `.drawio` 形式で格納
- エクスポートは `documents/architecture/diagrams/export/` に `.drawio.svg` 形式で格納
- Draw.io MCP が利用可能な場合はそちらを優先する

## ファイル構造

```
documents/architecture/diagrams/
├─ source/    # .drawio 正本（XML）— git管理対象
│  ├─ system-overview.drawio
│  └─ ml-pipeline.drawio
└─ export/    # .drawio.svg エクスポート
   ├─ system-overview.drawio.svg
   └─ ml-pipeline.drawio.svg
```

## 図の新規作成手順

1. 変更要件から図に含めるべき要素を抽出する
2. 図の種類を決定する（クラス図 / シーケンス図 / コンポーネント図 / データフロー図）
3. `source/` に `.drawio` ファイルを作成する
4. 対応する `export/` に SVG を配置する（手動または CI で生成）
5. `documents/architecture/views/` のビュー文書から図を参照する

## 図の更新手順

1. 変更差分から図への影響を特定する
2. `source/` の `.drawio` ファイルを開く
3. 最小限の XML 変更を行う
4. XML の妥当性を確認する
5. `export/` の SVG を更新する

## XML 編集ルール

### 基本構造

```xml
<mxfile host="..." modified="..." agent="..." version="...">
  <diagram id="..." name="ページ名">
    <mxGraphModel dx="..." dy="..." grid="1" ...>
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        <!-- ここに図の要素を追加 -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

### 編集時の注意点

- `id` は既存要素と重複しないユニークな値を使用する
- `parent` と `source` / `target` の参照整合性を維持する
- スタイル文字列はセミコロン区切りのキー=値ペア
- 座標系: 左上が原点（x: 右方向正, y: 下方向正）

### スタイルテンプレート

```
# コンポーネントボックス
rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;

# 矢印（依存関係）
edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;

# テキストラベル
text;html=1;align=center;verticalAlign=middle;resizable=0;
```

## 妥当性チェック

1. XML が well-formed であること（タグの閉じ忘れなし）
2. 全ての `mxCell` に有効な `id` があること
3. `parent` 参照が存在する `id` を指していること
4. `source` / `target` 参照が存在する `id` を指していること（エッジの場合）
5. ページ名が図の内容を適切に表していること

## MCP 非対応環境での代替手順

Draw.io MCP が利用できない場合:
1. XML を直接編集する（上記ルールに従う）
2. ローカルの Draw.io Desktop アプリまたは draw.io Web で妥当性を確認する
3. SVG エクスポートは手動で行う

## 変更履歴

| 日付 | 変更者 | 内容 |
|------|--------|------|
| 2025-07-15 | Copilot | 初版作成 |
